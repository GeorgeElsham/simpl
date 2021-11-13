const { EventService } = require('../services');

const EventSeed = () => {
    EventService.create({ data: 'data' });
}

module.exports = { EventSeed }