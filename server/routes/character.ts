import * as express from 'express';
const router = express.Router();

router.get('/', (req, res) => {
  const character = [
    {
      name: 'anira',
      type: 'fire'
    }, {
      name: 'yuel',
      type: 'fire',
    }
  ];

  res.json(character);
});

module.exports = router;
