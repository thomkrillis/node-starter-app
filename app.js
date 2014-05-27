var requirejs = require('requirejs');

requirejs.config({nodeRequire: require});
requirejs([
  'express',
  'morgan',
  'cookie-parser',
  'body-parser',
  'express-session',
  './config/secrets',
  'http',
  'mongoose',
  'path',
  'passport',
  'connect-flash'
],function(
  express,
  morgan,
  cookieParser,
  bodyParser,
  expressSession,
  secrets,
  http,
  mongoose,
  path,
  passport,
  flash
) {
  module.exports = express;
  module.exports = morgan;
  module.exports = cookieParser;
  module.exports = bodyParser;
  module.exports = expressSession;
  module.exports = secrets;
  module.exports = http;
  module.exports = mongoose;
  module.exports = path;
  module.exports = passport;
  module.exports = flash;
  app = express();
  port = secrets.port;
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
});
