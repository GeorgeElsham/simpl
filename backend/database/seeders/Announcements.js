const faker = require('faker');
const { v4 } = require('uuid');

const AnnouncementSeed = (AnnouncementService, user, society, event) => {
    return AnnouncementService.create({
        id: v4(),
        society_id: society.id,
        event_id: event.id,
        description: faker.commerce.productDescription(),
        user: user.id,
     });
}

module.exports = { AnnouncementSeed }