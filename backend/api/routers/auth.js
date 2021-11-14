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
  const { email, password } = req.body;

  const user = await account.signIn(email, password);

  if (user) {
    // Cookie logic
    const cookie = v4() + ':' + user.id;
    cookieCache.set(cookie, Date.now() + 1209600000)
    res.cookie('X-Auth-Simpl', cookie, { maxAge: 1209600000 }); // 14 Days
    res.status(200).json({
      success: true,
      data: user
    });
  }
  else {
    res.status(200).json({
      success: false,
      data: user
    });
  }
});

router.post('/sign-up', async (req, res) => {
  const { name, email, password } = req.body;

  const signedUp = await account.signUp(name, email, password);

  if (!signedUp) {
    res.status(500).json({
      success: false,
      data: signedUp
    });
  }
  else {
    res.status(200).json({
      success: true,
      data: {
        user: signedUp
      }
    });
  }
});

router.post('/sign-out', async (req, res) => {
  cookieCache.delete(req.incomingCookie);
  res.status(200).json({
    success: true,
    data: {
      user: req.user
    }
  });
});

router.patch('/edit', async (req, res) => {
  console.log('body:', JSON.stringify(req.body));
  await account.editUser(req.user.id, req.body);
  res.sendStatus(200);
});

module.exports = router;
