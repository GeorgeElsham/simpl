const express = require('express');
const app = express();
const cors = require('cors');
const morgan = require('morgan');
const helmet = require('helmet');



const { NODE_ENV } = require('./config');

app.use(helmet());
app.use(cors());
app.use(express.json());

if (NODE_ENV === 'development') {
	app.use(morgan('dev'));
}

// testing middleware
app.use((req, res, next) => {
	// Auth stuff?
	next();
});


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
