const express = require('express');
const { SocietyService, UserService } = require('../../database/services');
const router = express.Router();

router.get('/', async (req, res) => {
    console.log(req.user)
    const user = await UserService.getById(req.user);
    res.status(200).send(await user.getSocieties())
});

router.get('/:soc', async(req, res) => {
    const soc_id = req.params.soc;
    const soc = await SocietyService.getById(soc_id);
    console.log(soc)
    res.status(200).send(soc)
})

router.post('/:soc/join', async(req, res) => {
    const soc_id = req.params.soc;
    const soc = await SocietyService.getById(soc_id);
    const user = await UserService.getById(req.user)
    if (soc == undefined) {
        res.status(404)
    } else {
        console.log(soc[0])
        console.log(user)
        const userJoinedResponse = await soc[0].addUser(user)
        const userSetRoleResponse = await s[0].update({role: "member"})
        res.status(200).json(userSetRoleResponse)
    }
})

router.post('/:soc/leave', async(req, res) => {
    const soc_id = req.params.soc;
    const soc = await SocietyService.getById(soc_id);
    const user = await UserService.getById(req.user)
    if (soc == undefined) {
        res.status(404)
    } else {
        console.log(soc[0])
        console.log(user)
        const userLeftResponse = await soc[0].removeUser(user)
        res.status(200).json(userLeftResponse)
    }
})

router.get('/test', async (req, res) => {
    console.log(req.user);
    SocietyService.getAll();
    res.sendStatus(200);
});

module.exports = router;
