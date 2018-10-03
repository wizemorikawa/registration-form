import * as express from 'express';
import * as mongoose from 'mongoose';
import { MONGO_URL } from './config';
const path = require('path');
const app = express();

app.use(express.static(__dirname + '/../public'));
const server = app.listen(3000, function() {
  console.log(__dirname);
  // console.log(path.join(__dirname, '..dist'));
  console.log('node.js is listening to PORT:' + server.address().port);
});

// mongoose.Promise = global.Promise;
mongoose.connect(process.env.MONGO_URL || MONGO_URL, {
});

process.on('SIGINT', function() {mongoose.disconnect(); });
// const character = [
//   {
//     name: 'anira',
//     type: 'fire'
//   }, {
//     name: 'yuel',
//     type: 'fire',
//   }
// ];

// app.get('/api/character', function(req, res, next) {
//   res.json(character);
// });
// const router = express.Router();
const ROUTES = [
  'character',
  'mongoDB'
];
ROUTES.forEach(routerName => {
  console.log(routerName);
  const router = require('./routes/' + routerName);
  app.use('/api/' + routerName, router);

});
// const a = require('./routes/character');
// app.use('/api/character', a);

