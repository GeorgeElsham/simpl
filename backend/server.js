const { logger } = require('./helpers/logger');
const app = require('./app');
const { PORT } = require('./config');

// server
const port = PORT || 5000;
const server = app.listen(port, () => {
	logger.info(`App is running on http://localhost:${port}`);
});

// handle Globaly  the unhandle Rejection Error which is  outside the express
// e.g database connection
process.on('unhandledRejection', (error) => {
	// it uses unhandledRejection event
	// using unhandledRejection event
	logger.info(' Unhandled Rejection => shutting down..... ');
	logger.info(error.name, error.message);
	server.close(() => {
		process.exit(1); //  emidiatly exists all from all the requests sending OR pending
	});
});

process.on('uncaughtException', (error) => {
	// using uncaughtException event
	logger.info(' uncaught Exception => shutting down..... ');
	logger.info(error.name, error.message);
	process.exit(1); //  emidiatly exists all from all the requests
});
