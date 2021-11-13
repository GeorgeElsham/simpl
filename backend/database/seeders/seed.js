const { logger } = require('../../helpers/logger');
const { AnnouncementSeed } = require('./Announcements');
const { EventSeed } = require('./Events');
const { SocietySeed } = require('./Societies');
const { UserSeed } = require('./Users');



exports.seed = () => {
    logger.info('Seeding database...');
    AnnouncementSeed();
    EventSeed();
    SocietySeed();
    UserSeed();
}