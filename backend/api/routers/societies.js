const express = require('express');
const { SocietyService, UserService } = require('../../database/services');
const router = express.Router();

router.get('/', async (req, res) => {
    console.log(req.user)
    const user = await UserService.getById(req.user);
    res.status(200).send(user.Societies)
});

router.get('/test', async (req, res) => {
    console.log(req.user);
    SocietyService.getAll();
    res.sendStatus(200);

});

module.exports = router;
