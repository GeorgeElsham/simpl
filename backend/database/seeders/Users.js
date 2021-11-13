const { UserService } = require('../services');
const faker = require('faker');

const UserSeed = () => {
    return UserService.create({
        name: faker.name.findName(),
        email: faker.internet.email(),
        profile_picture: null,
        password_hash: faker.internet.password(),
        verified: Math.random() > 0.1 ? true : false,
    });
}

module.exports = { UserSeed }
