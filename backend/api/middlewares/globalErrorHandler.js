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

const sendErrorProd = (err, res) => {
   res.status(err.statusCode).json({
      status: err.status,
      message: err.message,
   });
};

module.exports = (err, req, res, next) => {
   err.statusCode = err.statusCode || 500;
   err.status = err.status || 'error';

   logger.info('Error found');
   if (NODE_ENV === 'development') {
      sendErrorDev(err, res);
   } 
   else if (NODE_ENV === 'production') {
      sendErrorProd(err, res);
   }
};
