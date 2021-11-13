const express = require('express');
const app = express();
const cors = require('cors');
const morgan = require('morgan');
const rateLimit = require('express-rate-limit');
const helmet = require('helmet');
const { NODE_ENV } = require('./config');

app.use(express.json());

app.use(helmet());

if (NODE_ENV === 'development') {
	app.use(morgan('dev'));
}

// CORS
app.use(cors());

//  set limit request from same API in timePeroid from same ip
const limiter = rateLimit({
	max: 200, //   max number of limits
	windowMs: 60 * 1000, // Minute
	message: 'too many req from this IP, try again in a minute',
});
//  Body Parser  => reading data from body into req.body protect from scraping etc
app.use(express.json());
app.get('/', (req, res) => {
    res.status(200).json({
        status: 'success',
    });
})

// handling all (get,post,update,delete.....) unhandled routes
app.all('*', (req, res, next) => {
	next(new Error(`Can't find ${req.originalUrl} on the server`, 404));
});

// error handling middleware
app.use(globalErrorHandler);

module.exports = app;
