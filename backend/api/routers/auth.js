const express = require('express');
const { v4 } = require('uuid');
const account = require('../../helpers/account');
const { cookieCache } = require('../../helpers/auth');
const router = express.Router();

router.get('/protected', (req, res) => {
  // Cookie logic
  res.status(200).json({
    working: true,
  });
});

router.post('/sign-in', async (req, res) => {
  const { email, password } = req.query;

  // Cookie logic
  const cookieValue = v4();
  cookieCache.set(cookieValue, Date.now() + 1209600000)
  res.cookie('X-Auth-Simpl', cookieValue, { maxAge: 1209600000 }); // 14 Days

  const signedIn = await account.signIn(email, password);
  res.send(`Signed in: ${signedIn}`);
});

router.post('/sign-up', async (req, res) => {
  const { name, email, password } = req.query;

  const signedUp = await account.signUp(name, email, password);
  res.send(`Signed up: ${signedUp}`);
});

module.exports = router;
