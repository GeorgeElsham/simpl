const express = require('express');
const app = express();
const cors = require('cors');
const helmet = require('helmet');
const cookieParser = require('cookie-parser');

const morganMiddleware = require('./api/middlewares/morgan');
const globalErrorHandler = require('./api/middlewares/globalErrorHandler');
const indexRoutes = require('./api/routers');

const { seed } = require('./database/seeders/seed');
const { dbInit } = require('./database/connection');
const services = require('./database/services');
const { checkAuth } = require('./helpers/auth');

(async () => {
    await dbInit();
    if (process.argv.includes('--seed')) {
        seed(services);
    }
})()

app.use(helmet());
app.use(cors());
app.use(express.json());
app.use(morganMiddleware)
app.use(cookieParser());
app.use(checkAuth);

// routes
app.use('/api', indexRoutes);

app.get('/', (req, res) => {
    res.send('Back home!')
})

// handling all (get,post,update,delete.....) unhandled routes
app.all('*', (req, res, next) => {
	next(new Error(`Can't find ${req.originalUrl} on the server`, 404));
});

// error handling middleware
app.use(globalErrorHandler);

module.exports = app;
