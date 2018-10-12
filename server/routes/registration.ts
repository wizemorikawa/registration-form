import * as express from 'express';
import * as fs from 'fs';
import * as path from 'path';
import { utf8Encode } from '../../node_modules/@angular/compiler/src/util';


const router = express.Router();
// const userData = require('./../../userData/userData.json');

interface UserData {
    List: any[];
}

router.post('/', (req, res, next) => {
    console.log(req.body);
    console.log(__dirname);
    console.log(typeof fs.readFileSync(path.join(__dirname, '../../../userData/userData.json'), 'utf8'));
    const userDatas: UserData = {List: []};
    const jsonUserDatas = fs.readFileSync(path.join(__dirname, '../../../userData/userData.json'), 'utf8');
    if (jsonUserDatas === '') {
        userDatas.List.push(req.body);
        fs.writeFileSync(path.join(__dirname, '../../../userData/userData.json'), JSON.stringify(userDatas));
    } else {
        const userData = JSON.parse(jsonUserDatas);
        console.log(userData);
        // const userDatas = {
        //     List: [userData]
        // };
        userDatas.List　= userData.List;
        console.log(userDatas);
        console.log(typeof userDatas);
        userDatas.List.push(req.body);
        fs.writeFileSync(path.join(__dirname, '../../../userData/userData.json'), JSON.stringify(userDatas));
    }
    res.json('完了');
});

router.get('/', (req, res, next) => {
    const userData = JSON.parse(fs.readFileSync(path.join(__dirname, '../../../userData/userData.json'), 'utf8'));
    res.json(userData);
});

module.exports = router;
