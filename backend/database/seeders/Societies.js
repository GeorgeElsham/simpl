const { SocietyService } = require('../services');

const SocietySeed = () => {
    SocietyService.create({ data: 'data' });
}

module.exports = { SocietySeed }