const { NODE_ENV } = require('../../config');
const { logger } = require('../../helpers/logger');

const sendErrorDev = (err, res) => {
   res.status(err.statusCode).json({
      status: err.status,
      error: err,
      message: err.message,
      stack: err.stack,
   });
};
module.exports = (err, req, res, next) => {
   err.statusCode = err.statusCode || 500;
   err.status = err.status || 'error';

   logger.info('Error found');
      sendErrorDev(err, res);
};
