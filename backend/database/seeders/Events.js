const { v4 } = require('uuid');
const faker = require('faker');

const EventSeed = (EventService) => {
    EventService.create({
        id: v4(),
        society_id: v4(),
        title: faker.lorem.lines(1),
        description: faker.lorem.sentences(Math.floor(Math.random() * (3 - 1 + 1) + 1)),
        location: 'faker.address.nearbyGPSCoordinate()',
        user: v4(),
    });
}

module.exports = { EventSeed }