var express = require('express'),
    app = express(),
    secrets = require('./config/secrets.js'),
    port = secrets.port,
    http = require('http'),
    mongoose = require('mongoose'),
    path = require('path'),
    passport = require('passport'),
    flash = require('connect-flash');

mongoose.connect(secrets.db);

require('./lib/passport')(passport);

app.configure(function() {
  app.use(express.logger('dev'));
  app.use(express.cookieParser());
  app.use(express.bodyParser());
  app.use(express.session({ secret: secrets.sessionSecret }));
  app.use(express.json());
  app.use(passport.initialize());
  app.use(passport.session());
  app.set('view engine', 'ejs');
  app.use(flash());
  app.use(app.router);
});

require('./app/routes/api')(app, passport);
require('./app/routes/client')(app, passport);
//require('./app/routes/oAuth')(app, passport);

app.listen(port);
console.log('listening on port ' + port);
