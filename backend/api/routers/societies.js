const express = require('express');
const { SocietyService, AnnouncementService, EventService } = require('../../database/services');
const router = express.Router();

router.get('/', (req, res) => {
    res.sendStatus(200);
});

router.get('/test', async (req, res) => {
    console.log(req.user);
    SocietyService.getAll();
    res.sendStatus(200);

});

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

    event.addUser(user);

    res.status(200).json({
        status: 'success',
        data: createdAnnouncement,
    });
})

module.exports = router;
