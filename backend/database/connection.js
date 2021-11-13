const Sequelize = require('sequelize');
const { NODE_ENV } = require('../config');
const { logger } = require('../helpers/logger');
const sequelizeConnection = require('./dbconfig');

const sequelize = new Sequelize(sequelizeConnection);


const society = require('./models/society')(sequelize, Sequelize.DataTypes);


module.exports = { society };

if (NODE_ENV == 'development') {
    const force = process.argv.includes('--forcesync');
    const sync = process.argv.includes('--sync');
    if (sync) {
        sequelize.sync({ force: force });
        if (force) logger.alert('All models force synced');
        else logger.alert('All models synced');
    }
}