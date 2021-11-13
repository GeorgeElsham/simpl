const auth = require('./auth');

function indexRoutes(app) {
  app.use('/auth', auth);
}

module.exports = indexRoutes;
