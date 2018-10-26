import * as express from 'express';


const router = express.Router();


router.get('/', (req, res, next) => {
    delete req.session.user;
    res.json('ログアウト');
});

module.exports = router;
