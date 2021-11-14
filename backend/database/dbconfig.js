require('dotenv').config();
const { logger } = require('../helpers/logger')

const {
    NODE_ENV,
    POSTGRES_DATABASE_PROD,
    POSTGRES_DATABASE_DEV,
    POSTGRES_USERNAME,
    POSTGRES_PASSWORD,
    POSTGRES_HOST,
    POSTGRES_PORT,
} = require('../config');

/**
 * Parses strings of the type
 * postgres://username:password@host:port/<database>
 */
function parseConnectionString(completeDatabaseUrl) {

    let url = completeDatabaseUrl.split('postgres://').join('');
    const components = url.split(':');

    const usernameParsed = components[0];

    let portDatabaseArray = components[1];
    let portDatabase = portDatabaseArray.split('@');
    const passwordParsed = portDatabase[0];
    const domainParsed = portDatabase[1];

    let passwordDomainArray = components[2];
    let passwordDomain = passwordDomainArray.split('/');
    const portParsed = passwordDomain[0];
    const databaseName = passwordDomain[1];

    return {
        database: databaseName,
        username: usernameParsed,
        password: passwordParsed,
        host: domainParsed,
        port: portParsed,
    }
}

/**
 * https://sequelize.org/master/class/lib/sequelize.js~Sequelize.html#instance-constructor-constructor
 */
module.exports = {
    // Connection details
    database: NODE_ENV == 'production' ? POSTGRES_DATABASE_PROD : POSTGRES_DATABASE_DEV,
    username: POSTGRES_USERNAME,
    password: POSTGRES_PASSWORD,
    host: POSTGRES_HOST,
    port: Number(POSTGRES_PORT),

    // Configs
    dialect: 'postgres',
    logging: (...msg) => logger.debug({ message: msg[0], duration: msg[1], details: msg[2] }),
    benchmark: true, // Adds a time duration for queries 
    dialectOptions: POSTGRES_HOST == 'localhost' ? undefined : {
        ssl: {
            require: true,
            rejectUnauthorized: false,
        },
    },
    pool: {
        max: 10,
        min: 0,
        idle: 10000,
        acquire: 30000,
        evict: 2000,
    }
};