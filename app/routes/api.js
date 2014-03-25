var apiController = require('../controllers/apiController');
 
module.exports = function(app, passport) {

  app.get('/api/v1/users', apiController.getUsers);  

  app.get('/api/v1/users/:id', apiController.getUserById);

  app.post('/api/v1/users', apiController.postUsers);

  app.put('/api/v1/users/:id', apiController.putUserById);

//  app.post('/api/v1/login', apiController.postLogin);

//  app.post('/api/v1/oauth', apiController.postOAuth);

//  app.post('/api/v1/resetpassword', apiController.postResetPassword);

//  app.post('/api/v1/resetpassword/:id', apiController.postResetPasswordForId);

//  app.post('/api/v1/confirmuser', apiController.postConfirm);

//  app.post('/api/v1/confirmuser/:id', apiController.postConfirmById);
 
  app.delete('/api/v1/users/:id', apiController.deleteUserById);

//  app.post('/api/v1/logout', apiController.postLogout); 

//  app.get('/api/v1/unlink/local', apiController.getUnlinkLocal);

  
  // TODO: unlink facebook auth
  
  // TODO: unlink google auth
  
  // TODO: unlink twitter auth

};
