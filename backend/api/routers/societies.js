const express = require('express');
const { SocietyService, AnnouncementService, EventService, UserService } = require('../../database/services');
const router = express.Router();

router.get('/', async (req, res) => {
    res.status(200).json({
        success: true,
        data: await req.user.getSocieties()
    });
});

router.get('/all', async (req, res) => {
    res.status(200).json({
        success: true,
        data: await SocietyService.getAll()
    });
});

router.get('/:soc', async(req, res) => {
    const soc_id = req.params.soc;
    const soc = await SocietyService.getById(soc_id);
    console.log(soc)
    res.status(200).json({
        success: true,
        data: soc
    });
})

router.post('/:soc/join', async(req, res) => {
    const socs = await SocietyService.getById(req.params.soc);

    if (socs == undefined) {
        res.status(404)
    } else {
        const society = socs[0]
        const userSoc = await society.addUser(req.user)
        const userSetRoleResponse = await userSoc[0].update({ role: "member" })
        res.status(200).json({
            success: true,
            data: userSetRoleResponse
        })
    }
})

router.post('/:soc/leave', async(req, res) => {
    const socs = await SocietyService.getById(req.params.soc);

    if (socs == undefined) {
        res.status(404)
    } else {

        const userLeftResponse = await socs[0].removeUser(req.user)
        res.status(200).json({
            success: true,
            data: userLeftResponse
        })
    }
})

router.get('/:soc/members', async (req, res) => {
    const society = await SocietyService.getById(req.params.soc);
    const users = await society[0].getUsers();

    res.status(200).json({
        status: 'success',
        users,
    });
});

router.get('/:soc/announcements', async (req, res) => {
    const society = await AnnouncementService.getBySoc(req.params.soc)

    res.status(200).json({
        status: 'success',
        data: society,
    });
});

router.post('/:soc/announcements/create', async (req, res) => {
    const createdAnnouncement = await AnnouncementService.create(req.body)

    res.status(200).json({
        status: 'success',
        data: createdAnnouncement,
    });
});

router.get('/:soc/events', async (req, res) => {

    const events = await EventService.getBySoc(req.params.soc)

    res.status(200).json({
        status: 'success',
        data: events,
    });
})

router.post('/:soc/events/create', async (req, res) => {

    const event = await EventService.create(req.body);

    res.status(200).json({
        status: 'success',
        data: event,
    });
})

router.post('/:soc/events/:event/join', async (req, res) => {

    const user = req.user

    const event = await EventService.get([req.params.event]);

    const joinedEvent = await event[0].addUser(user);

    res.status(200).json({
        status: 'success',
        data: joinedEvent,
    });
})

module.exports = router;
