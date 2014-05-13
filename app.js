var express = require('express'),
    morgan = require('morgan'),
    cookieParser = require('cookie-parser'),
    bodyParser = require('body-parser'),
    expressSession = require('express-session'),
    app = express(),
    secrets = require('./config/secrets.js'),
    port = secrets.port,
    http = require('http'),
    mongoose = require('mongoose'),
    path = require('path'),
    passport = require('passport'),
    flash = require('connect-flash');

module.exports = app;

mongoose.connect(secrets.db);

require('./lib/passport')(passport);

app.use(morgan('dev'));
app.use(cookieParser());
app.use(bodyParser());
app.use(expressSession({ secret: secrets.sessionSecret }));
app.use(passport.initialize());
app.use(passport.session());
app.set('view engine', 'ejs');
app.use(flash());

require('./app/routes/api')(app, passport);
require('./app/routes/client')(app, passport);
//require('./app/routes/oAuth')(app, passport);

app.listen(port);
console.log('listening on port ' + port);
