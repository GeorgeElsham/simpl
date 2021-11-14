const express = require('express');
const account = require('../../helpers/account');
const router = express.Router();

router.get('/', (req, res) => {
  res.sendStatus(200);
});

router.post('/sign-in', async (req, res) => {
  const { email, password } = req.query;
  console.log(email, password);

  await account.signUp('George', 'ge1g21@soton.ac.uk', 'password123');

  const signedIn = await account.signIn(email, password);
  console.log('signedIn:', signedIn);

  res.send('Test message on /sign-in');
});

module.exports = router;
