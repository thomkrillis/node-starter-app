require.config({
  baseURL: '/',
  paths: {
    app: "../app",
    User: '../app/models/User',
    passport: '../lib/passport',
//    passport-local: 'passport-local',
    request: "../node_modules/supertest/test/supertest"
  },
//  shim: {
//    'mongoose': {
//      exports: 'mongoose'
//    },
//    'bcrypt': {
//      exports: 'bcrypt'
//    }
//  }
});

require([
  'models.js',
  'routes.js'
], function() {
  if (navigator.userAgent.indexOf('PhantomJS') < 0) {
    mocha.run();
  }
});
