// import * as express from 'express';
// import { RegiInfo } from '../models/mongoDBmodel';

// const router = express.Router();


// router.get('/', (req, res , next) => {
//   RegiInfo.find((err, doc) => {
//     if (err) {
//       return res.json(err);
//     }

//     return res.json(doc);
//   });
// });


// router.post('/', (req, res) => {
//   const regiInfo = new RegiInfo({
//     regiInfo: req.body
//   });

//   regiInfo.save((err, result) => {
//     if (err) {
//       return res.json(err);
//     }
//   });
// });


// module.exports = router;

