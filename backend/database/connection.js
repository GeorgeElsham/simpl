const Sequelize = require('sequelize');
const { NODE_ENV } = require('../config');
const { logger } = require('../helpers/logger');

const sequelizeConnection = require('./dbconfig');
const { roles } = require('./models/enums');

const sequelize = new Sequelize(sequelizeConnection);


const Announcements = require('./models/Announcements')(sequelize, Sequelize.DataTypes);
const Events = require('./models/Events')(sequelize, Sequelize.DataTypes);
const Societies = require('./models/Societies')(sequelize, Sequelize.DataTypes);
const Users = require('./models/Users')(sequelize, Sequelize.DataTypes);

// User event join table
UserEvent = sequelize.define('user_event', {}, {
    freezeTableName: true,
    underscored: true,
});

Users.belongsToMany(Events, { through: UserEvent });
Events.belongsToMany(Users, { through: UserEvent });

// User society join table
UserSociety = sequelize.define('user_society', {
    role: Sequelize.ENUM(roles),
}, {
    freezeTableName: true,
    underscored: true,
});

Users.belongsToMany(Societies, { through: UserSociety });
Societies.belongsToMany(Users, { through: UserSociety });


const dbInit = async () => {
    // if (NODE_ENV == 'development') {
    const force = process.argv.includes('--forcesync');
    const sync = process.argv.includes('--sync');
    if (sync) {
        await sequelize.sync({ force: force });
        if (force) {
            logger.alert('All models force synced');
        }
        else {
            logger.alert('All models synced');
        }
    }
    // }
}

module.exports = { Announcements, Events, Societies, Users, dbInit };