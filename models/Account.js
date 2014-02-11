module.exports = function(config, mongoose, nodemailer) {
  var crypto = require('crypto');

  // Instantiate account schema
  var AccountSchema = new mongoose.Schema({
    email:    { type: String, unique: true },
    password: { type: String },
    name: {
      first: { type: String },
      last: { type: String },
      nick: { type: String }
    }
  });

  // Create Account
  var Account = mongoose.model('Account', AccountSchema);

  var registerCallback = function(err) {
    if(err) {
      return console.log(err);
    };
    
    return console.log('Account Creation Successful!');
  };

  // Change Password - Sends email to user if forgotten
  var forgotPassword = function(email, resetPasswordUrl, callback) {
    var user = Account.findOne({email: email}, function findAccount(err, doc) {
      // Not a valid user
      if(err) { 
        callback(false);
      } else {
        // Success
        var smtpTransport = nodemailer.createTransport('SMTP', config.mail);
        resetPasswordUrl += '?account=' + doc._id;
        smtpTransport.sendMail({
          from: 'accounts@thehackerati.com',  // Change this to your own email
          to: doc.email,
          subject: 'Application Password Reset',
          text: 'Click here to reset your password: ' + resetPasswordUrl
        }, function forgotPasswordResult(err) {
          if(err) {
            callback(false);
          } else {
            callback(true);
          }
        });
      }
    });
  };

  // Login **Salt it yourself, suckers!
  var login = function(email, password, callback) {
    var shaSum = crypto.createHash('sha256');
    shaSum.update(password);
    Account.findOne({email:email,password:shaSum.digest('hex')}, function(err,doc) {
      callback(null != doc);
    });
  };

  // Registration **Salt it yourself, suckers!
  var register = function(email, password, firstName, lastName, nickName) {
    var shaSum = crypto.createHash('sha256');
    shaSum.update(password);

    console.log('Registering ' + email);
    var user = new Account({
      email: email,
      name: {
        first: firstName,
        last: lastName,
        nick: nickName
      },
      password: shaSum.digest('hex')
    });
    
    user.save(registerCallback);
    console.log('Save sent');
  }
  
  return {
    register: register,
    forgotPassword: forgotPassword,
    changePassword: changePassword,
    login: login,
    Account: Account
  }
}
