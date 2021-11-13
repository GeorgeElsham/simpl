const { logger } = require('../../helpers/logger');
const { AnnouncementSeed } = require('./Announcements');
const { EventSeed } = require('./Events');
const { SocietySeed } = require('./Societies');
const { UserSeed } = require('./Users');



exports.seed = async () => {
    logger.info('Seeding database...');
    const users = [];
    for (let i = 0; i < 10; i++) {
        users.push(await UserSeed());
    }

    // SocietySeed(users);
    // AnnouncementSeed();
    // EventSeed();
}