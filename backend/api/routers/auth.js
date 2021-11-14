const express = require('express');
const account = require('../../helpers/account');
const { cookieCache } = require('../../helpers/auth');
const router = express.Router();

router.get('/setcookie', (req, res) => {
  // Cookie logic
  const cookieValue = 'testcookie' + Math.random();
  cookieCache.set(cookieValue, Date.now() + 1209600000)
  res.cookie('X-Auth', cookieValue, { maxAge: 1209600000 }); // 14 Days
  res.sendStatus(200);
});

router.get('/protected', (req, res) => {
  // Cookie logic
  res.status(200).json({
    working: true,
  });
});

router.post('/sign-in', async (req, res) => {
  const { username, password } = req.query;
  console.log(username, password);

  await account.signUp('George', 'ge1g21@soton.ac.uk', 'password123');

  const signedIn = await account.signIn(email, password);
  console.log('signedIn:', signedIn);

  res.send('Test message on /sign-in');
});

module.exports = router;
