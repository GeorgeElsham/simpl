const express = require('express')
const router = express.Router()


const auth = require('./auth');
const societies = require('./societies');


router.use('/auth', auth);
router.use('/societies', societies);


module.exports = router;
