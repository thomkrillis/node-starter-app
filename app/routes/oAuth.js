// OAuth Routes
var oAuthController = require('../controllers/oAuthController');

module.exports = function(app, passport) {
  
  app.get('/api/v1/auth/facebook', oAuthController.facebookAuth);

  app.get('/api/v1/auth/facebook/callback', oAuthController.facebookAuthCallback);

  app.get('/api/v1/auth/google', oAuthController.googleAuth);

  app.get('/api/v1/auth/google/callback', oAuthController.googleAuthCallback);

  app.get('/api/v1/auth/twitter', oAuthController.twitterAuth);

  app.get('/api/v1/auth/twitter/callback', oAuthController.twitterAuthCallback);

};
