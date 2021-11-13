const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    res.sendStatus(200);
});

router.post('/test', async (req, res) => {
    res.send('sadfasdfasdf');
});

module.exports = router;
