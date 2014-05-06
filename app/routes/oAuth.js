// OAuth Routes
var oAuthController = require('../controllers/oAuthController');

module.exports = function(app, passport) {
  
  app.route('/api/v1/auth/facebook')
    .get(oAuthController.facebookAuth);

  app.route('/api/v1/auth/facebook/callback')
    .get(oAuthController.facebookAuthCallback);

  app.route('/api/v1/auth/google')
    .get(oAuthController.googleAuth);

  app.route('/api/v1/auth/google/callback')
    .get(oAuthController.googleAuthCallback);

  app.route('/api/v1/auth/twitter')
    .get(oAuthController.twitterAuth);

  app.route('/api/v1/auth/twitter/callback')
    .get(oAuthController.twitterAuthCallback);

};
