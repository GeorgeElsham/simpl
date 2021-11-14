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

  const user = await account.signIn(email, password);

  if (user) {
    // Cookie logic
    const cookie = v4() + ':' + user.id;
    cookieCache.set(cookie, Date.now() + 1209600000)
    res.cookie('X-Auth-Simpl', cookie, { maxAge: 1209600000 }); // 14 Days
    res.status(200).json({
      signedIn: true,
    });
  }
  else {
    res.status(200).json({
      signedIn: false,
    });
  }
});

router.post('/sign-up', async (req, res) => {
  const { name, email, password } = req.query;

  const signedUp = await account.signUp(name, email, password);
  res.send(`Signed up: ${signedUp}`);
});

router.post('/sign-out', async (req, res) => {
  if (req.user) {
    cookieCache.delete(req.user.id);
    res.send(`Signed out user with ID: '${req.user.id}'`);
  } else {
    res.send('Failed to sign out - no user ID given');
  }
});

router.patch('/edit', async (req, res) => {
  console.log('body:', JSON.stringify(req.body));
  await account.editUser(req.user.id, req.body);
  res.sendStatus(200);
});

module.exports = router;
