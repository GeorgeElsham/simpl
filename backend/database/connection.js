const Sequelize = require('sequelize');
const { NODE_ENV } = require('../config');
const { logger } = require('../helpers/logger');

const sequelizeConnection = require('./dbconfig');

const sequelize = new Sequelize(sequelizeConnection);


const Announcements = require('./models/Announcements')(sequelize, Sequelize.DataTypes);
const Events = require('./models/Events')(sequelize, Sequelize.DataTypes);
const Societies = require('./models/Societies')(sequelize, Sequelize.DataTypes);
const User_society = require('./models/User_society')(sequelize, Sequelize.DataTypes);
const Users = require('./models/Users')(sequelize, Sequelize.DataTypes);


module.exports = { Announcements, Events, Societies, User_society, Users };

const { seed } = require('./seeders/seed');

(async () => {
    if (NODE_ENV == 'development') {
        const force = process.argv.includes('--forcesync');
        const sync = process.argv.includes('--sync');
        if (sync) {
            await sequelize.sync({ force: force });
            if (force) {
                logger.alert('All models force synced');
                seed();
                logger.alert('Seeded new random data');
            }
            else {
                logger.alert('All models synced');
            }
        }
    }
})()
