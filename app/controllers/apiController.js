var passport = require('passport'),
    mongoose = require('mongoose');

var User = mongoose.model('User', User);  

// GET - lists all users
exports.getUsers = function(req, res) {
  return User.find(function (err, users) {
    if (err) {
      return console.log(err);
    } else {
      return res.send(users);
    }
  });
};

// GET - lists user with specific id
exports.getUserById = function(req, res) {
  return User.findById(req.params.id, function (err, user) {
    if (err) {
      res.json(404, {"message":"no such user"});
      return console.log(err);
    } else {
      return res.send(user);
    }
  });
};

// POST - add new user
exports.postUsers = passport.authenticate('local-signup', function(req, res) {
  var user;
  console.log('POST: ');
  console.log(req.body);
  user = new User({
    "email": req.body.email,
    "password": req.body.password
  });
  user.save(function (err) {
    if (!err) {
      return console.log("success");
    } else {
      return console.log(err);
    }
  });
  return res.send(user);
});

// PUT - update user details
exports.putUserById = passport.authenticate('local-signup', function(req, res) {
  return User.findById(req.params.id, function (err, user) {
    user.email = req.body.email;
    user.password = req.body.password;
    return user.save(function (err) {
      if (!err) {
        res.json(200, {"message":"success"});
      } else {
        console.log(err);
      }
      return res.send(user);
    });
  });
});
  
//  // POST - login user
//  exports.postLogin = function(req, res) {};
//  
//  // POST - login user using oAuth
//  exports.postOAuth = function(req, res) {};
//  
//  // POST - sends email to reset password
//  exports.postResetPassword = function(req, res) {};
//  
//  // POST - resets the password
//  exports.postResetPasswordForId = function(req, res) {};
// 
//  // POST - sends confirmation email
//  exports.postConfirm = function(req, res) {};
// 
//  // POST - confirms user
//  exports.postConfirmById = function(req, res) {};
// 
  // DELETE - delete user by id
  exports.deleteUserById = function (req, res) {
    return User.findById(req.params.id, function (err, user) {
      return user.remove(function (err) {
        if (!err) {
          console.log("removed successfully");
          return res.send('');
        } else {
          console.log(err);
        }
      });
    });
  };

//  // GET - unlink user
//  exports.getUnlinkLocal = function(req, res) {};
//
//  // POST - logout user
//  exports.postLogout = function(req, res) {};
