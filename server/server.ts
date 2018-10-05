import * as express from 'express';
import * as bodyParser from 'body-parser';

const path = require('path');
const app = express();

app.use(express.static(path.join(__dirname, '/../public')));
const server = app.listen(3000, function() {
  console.log(__dirname);
  // console.log(path.join(__dirname, '..dist'));
  console.log('node.js is listening to PORT:' + server.address().port);
});

app.use(bodyParser.json());

const ROUTES = [
  'character',
  'registration'
];
ROUTES.forEach(routerName => {
  console.log(routerName);
  const router = require('./routes/' + routerName);
  app.use('/api/' + routerName, router);

});
// const a = require('./routes/character');
// app.use('/api/character', a);

