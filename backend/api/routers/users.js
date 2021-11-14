const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    res.sendStatus(200);
});

router.get('/test', async (req, res) => {
    console.log(req.user);
    res.send('sadfasdfasdf');
});

module.exports = router;
