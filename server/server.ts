import * as express from 'express';
import * as bodyParser from 'body-parser';
import * as cookieParser from 'cookie-parser';
import * as serveStatic from 'serve-static';
import * as session from 'express-session';
import { request } from 'https';

const path = require('path');
const app = express();
const SQLiteStore = require('connect-sqlite3')(session);

app.use(express.static(path.join(__dirname, '/../public')));
const server = app.listen(3000, function() {
  console.log(__dirname);
  // console.log(path.join(__dirname, '..dist'));
  console.log('node.js is listening to PORT:' + server.address().port);
});

app.use(session({
  store: new SQLiteStore({
    db: './sessions.sqlite3'
  }),
  secret: 'secret',
  resave: false,
  saveUninitialized: false,
  cookie: {
    httpOnly: true,
    secure: false,
    maxAge: 1000 * 30
  }
}));

app.use(bodyParser.json());
app.use(cookieParser());

const URL_ROUTES = [
  '/myApp(/[^/]+)?',
];

URL_ROUTES.forEach(routerName => {
  app.use(routerName, serveStatic(path.join(__dirname, '/../public')));
});

const ROUTES = [
  'character',
  'registration',
  'login',
  'logout'
];
ROUTES.forEach(routerName => {
  console.log(routerName);
  const router = require('./routes/' + routerName);
  app.use('/api/' + routerName, router);

});
// const a = require('./routes/character');
// app.use('/api/character', a);

const sessionData = {};

// get sessiondata
// var session = JSON.parse(sessionData[request.cookie['connect.sid']]);

// // set sessiondata
// sessionData[request.cookie['connect.sid']] = {
//   data: JSON.stringify(somedata),
//   expireted: 2018/10/22 13:44:00,
// };
