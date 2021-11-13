const { logger } = require('./helpers/logger');
const app = require('./app');
const { PORT } = require('./config');

// server
const port = PORT || 5000;
const server = app.listen(port, () => {
	logger.info(`App is running on http://localhost:${port}`);
});

process.on('unhandledRejection', (error) => {
	logger.info(' Unhandled Rejection => shutting down..... ');
	logger.info(error.name, error.message);
	server.close(() => {
		process.exit(1);
	});
});

process.on('uncaughtException', (error) => {
	logger.info(' uncaught Exception => shutting down..... ');
	logger.info(error.name, error.message);
	process.exit(1);
});
