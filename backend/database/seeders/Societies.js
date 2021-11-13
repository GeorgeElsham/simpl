const { SocietyService } = require('../services');
const faker = require('faker');
const { society_categories } = require('../models/enums');

const SocietySeed = () => {
    return SocietyService.create({
        name: faker.company.companyName(),
        description: faker.commerce.productDescription(),
        profile_picture: null,
        category: society_categories[Math.floor(Math.random() * (2 - 0 + 1) + 0)],
        color: Math.floor(Math.random() * (16777216 - 0 + 1) + 0), // Colours
    });
}

module.exports = { SocietySeed }