const express = require('express')
const router = express.Router()


const auth = require('./auth');
const societies = require('./societies');
const events = require('./events');


router.use('/auth', auth);
router.use('/societies', societies);
router.use('/events', events)


module.exports = router;
