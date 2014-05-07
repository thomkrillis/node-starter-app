var clientController = require('../controllers/clientController');
 
module.exports = function(app, passport) {
  app.route('/')
    .get(clientController.getRoot);

    // SIGNUP =================================
    // show the signup form
    app.route('/signup')
      .get(function(req, res) {
        res.render('signup.ejs', { message: req.flash('signupMessage') });
      })

    // process the signup form
      .post(passport.authenticate('local-signup', {
        successRedirect : '/profiles',
        failureRedirect : '/signup', // redirect back to the signup page if there is an error
        failureFlash : true // allow flash messages
      }));

};
