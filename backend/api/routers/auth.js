const express = require('express');
const account = require('../../helpers/account');
const router = express.Router();

router.get('/', (req, res) => {
  res.sendStatus(200);
});

router.post('/sign-in', async (req, res) => {
  const { email, password } = req.query;

  const signedIn = await account.signIn(email, password);
  res.send(`Signed in: ${signedIn}`);
});

router.post('/sign-up', async (req, res) => {
  const { name, email, password } = req.query;

  const signedUp = await account.signUp(name, email, password);
  res.send(`Signed up: ${signedUp}`);
});

module.exports = router;
