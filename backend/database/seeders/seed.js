const { logger } = require('../../helpers/logger');
const { roles } = require('../models/enums');
const { AnnouncementSeed } = require('./Announcements');
const { EventSeed } = require('./Events');
const { SocietySeed } = require('./Societies');
const { UserSeed } = require('./Users');

exports.seed = async ({ AnnouncementService, EventService, SocietyService, UserService }) => {
    logger.info('Seeding database...');

    const num_users = 500;
    const num_socs = 50;
    const num_events = 100;

    // Generates 100 users
    const users = [];
    for (let i = 0; i < num_users; i++) {
        users.push(await UserSeed(UserService));
    }

    // Generates 10 Societies
    const societies = [];
    for (let i = 0; i < num_socs; i++) {
        societies.push(await SocietySeed(SocietyService));
    }

    // Adds all the users to a random number of societies
    for (const user of users) {
        for (let i = 0; i < Math.floor(Math.random() * (7 - 1 + 1) + 1); i++) {
            const usersociety = await user.addSociety(societies[Math.floor(Math.random() * ((num_socs - 1) - 0 + 1) + 0)]);
            if (usersociety) { // To stop usersociety being undefined if user has already joined the society
                await usersociety[0].update({ role: roles[Math.floor(Math.random() * (2 - 0 + 1) + 0)] });
            }

        }
    }

    const events = []
    for (let i = 0; i < num_events; i++) {
        events.push(await EventSeed(EventService, societies[Math.floor(Math.random() * ((num_socs - 1) - 0 + 1) + 0)]));
    }

    const announcements = []
    for (let i = 0; i < 500; i++) {
        announcements.push(await AnnouncementSeed(
            AnnouncementService,
            users[Math.floor(Math.random() * ((num_users - 1) - 0 + 1) + 0)],
            societies[Math.floor(Math.random() * ((num_socs - 1) - 0 + 1) + 0)],
            events[Math.floor(Math.random() * ((num_events - 1) - 0 + 1) + 0)]
        ));
    }


}