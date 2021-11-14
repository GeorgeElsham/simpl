const express = require('express');
const { SocietyService } = require('../../database/services');
const router = express.Router();

router.get('/', (req, res) => {
    res.sendStatus(200);
});

router.get('/test', async (req, res) => {
    console.log(req.user);
    SocietyService.getAll();
    res.sendStatus(200);

});

module.exports = router;
