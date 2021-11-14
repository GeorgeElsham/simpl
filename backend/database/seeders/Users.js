const faker = require('faker');

const UserSeed = (UserService) => {
    return UserService.create({
        name: faker.name.findName(),
        email: faker.internet.email(),
        profile_picture: null,
        password_hash: '$2b$10$faELE/NaPHklpmndDE/Hw.vqSyasj.sW6jR/XK0lHKRe4xQvWd2MG', // Default password is "password"
        verified: Math.random() > 0.1 ? true : false,
    });
}

module.exports = { UserSeed }
