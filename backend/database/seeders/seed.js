const { logger } = require('../../helpers/logger');
const { roles } = require('../models/enums');
const { AnnouncementSeed } = require('./Announcements');
const { EventSeed } = require('./Events');
const { SocietySeed } = require('./Societies');
const { UserSeed } = require('./Users');



exports.seed = async () => {
    logger.info('Seeding database...');

    // Generates 100 users
    const users = [];
    for (let i = 0; i < 100; i++) {
        users.push(await UserSeed());
    }

    // Generates 10 Societies
    const societies = [];
    for (let i = 0; i < 10; i++) {
        societies.push(await SocietySeed());
    }

    // Adds all the users to a random number of societies
    for (const user of users) {
        for (let i = 0; i < Math.floor(Math.random() * (7 - 1 + 1) + 1); i++) {
            const usersociety = await user.addSociety(societies[Math.floor(Math.random() * (9 - 0 + 1) + 0)]);
            if (usersociety) { // To stop usersociety being undefined if user has already joined the society
                await usersociety[0].update({ role: roles[Math.floor(Math.random() * (2 - 0 + 1) + 0)] });
            }

        }
    }

    for (let i = 0; i < 10; i++) {
        societies.push(await EventSeed());
    }

    for (let i = 0; i < 10; i++) {
        societies.push(await AnnouncementSeed());
    }


}