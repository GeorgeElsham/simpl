const { UserService } = require('../services');
const faker = require('faker');
const crypto = require('crypto');

const UserSeed = () => {
    return UserService.create({ 
        name: faker.name.findName(),
        email: faker.internet.email(),
        profile_picture: null,
        password_hash: faker.internet.password(),
        password_salt: crypto.randomBytes(32).toString(),
        verified: Math.random() > 0.1 ? true : false,
    });
}

module.exports = { UserSeed }
