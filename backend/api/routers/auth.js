const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
  res.sendStatus(200);
});

router.post('/sign-in', async (req, res) => {
  const { username, password } = req.query;
  console.log(username, password);
  const account = require('../../helpers/account');

  await account.signIn(username, password);

  res.send('Test message on /sign-in');
});

module.exports = router;
