const { AnnouncementService } = require('../services');

const AnnouncementSeed = () => {
    AnnouncementService.create({ data: 'data' });
}

module.exports = { AnnouncementSeed }