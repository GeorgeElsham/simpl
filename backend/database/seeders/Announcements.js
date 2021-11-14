const faker = require('faker');
const { v4 } = require('uuid');

const AnnouncementSeed = (AnnouncementService) => {
    AnnouncementService.create({
        id: v4(),
        society_id: v4(),
        event_id: v4(),
        description: faker.commerce.productDescription(),
        user: v4(),
     });
}

module.exports = { AnnouncementSeed }