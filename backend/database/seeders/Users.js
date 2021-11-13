const { UserService } = require('../services');

const UserSeed = () => {
    UserService.create({ data: 'data' });
}

module.exports = { UserSeed }