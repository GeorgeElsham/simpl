const { v4 } = require('uuid');
const faker = require('faker');

const EventSeed = (EventService, society) => {
    return EventService.create({
        id: v4(),
        society_id: society.id,
        title: faker.lorem.lines(1),
        description: faker.lorem.sentences(Math.floor(Math.random() * (3 - 1 + 1) + 1)),
        location: ['Online', 'Zepler', 'B46', 'Common', 'Stags', 'Hobbit', 'SUSU Foyer'][Math.floor(Math.random() * (6 - 0 + 1) + 0)],
        user: v4(),
    });
}

module.exports = { EventSeed }