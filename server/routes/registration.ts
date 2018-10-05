import * as express from 'express';
import * as fs from 'fs';
import * as path from 'path';
import { utf8Encode } from '../../node_modules/@angular/compiler/src/util';


const router = express.Router();
// const userData = require('./../../userData/userData.json');



router.post('/', (req, res, next) => {
    console.log(req.body);
    console.log(__dirname);
    const userData = JSON.parse(fs.readFileSync(path.join(__dirname, '../../../userData/userData.json'), 'utf8'));
    console.log(userData);
    console.log(typeof userData);
    fs.writeFileSync(path.join(__dirname, '../../../userData/userData.json'), JSON.stringify(req.body));
    res.json('完了');
});

module.exports = router;
