require('dotenv').config();

module.exports = {
    POSTGRES_DATABASE_PROD: process.env.POSTGRES_DATABASE_PROD,
    POSTGRES_DATABASE_DEV: process.env.POSTGRES_DATABASE_DEV,
    POSTGRES_USERNAME: process.env.POSTGRES_USERNAME,
    POSTGRES_PASSWORD: process.env.POSTGRES_PASSWORD,
    POSTGRES_HOST: process.env.POSTGRES_HOST,
    POSTGRES_PORT: process.env.POSTGRES_PORT,

    NODE_ENV: process.env.NODE_ENV || 'development',
    PORT: process.env.PORT || 8000,
};