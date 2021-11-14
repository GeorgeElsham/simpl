const express = require('express')
const router = express.Router()


const auth = require('./auth');
const users = require('./users');
const societies = require('./societies');


router.use('/auth', auth);
router.use('/users', users);
router.use('/societies', societies);


module.exports = router;
