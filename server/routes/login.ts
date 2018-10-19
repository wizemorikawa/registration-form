import * as express from 'express';
import * as fs from 'fs';
import * as path from 'path';

const router = express.Router();


router.post('/', (req, res, next) => {

    const jsonUserDatas = JSON.parse(fs.readFileSync(path.join(__dirname, '../../../userData/userData.json'), 'utf8'));
    let matchUser;
    jsonUserDatas.List.forEach(userData => {
        if (userData.name === req.body.name && userData.password === req.body.password) {
            fs.writeFileSync(path.join(__dirname, '../../../userData/login.json'), JSON.stringify(userData));
            matchUser = userData;
        }
    });
    res.json(matchUser);
});

router.get('/check', (req, res, next) => {
    const loginUser = fs.readFileSync(path.join(__dirname, '../../../userData/login.json'), 'utf-8');
    if (loginUser !== '') {
        res.json(JSON.parse(loginUser));
    } else {
        res.json({hurigana: '', name: '', password: ''});
    }
});


module.exports = router;
