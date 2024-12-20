const authRoutes = require('./auth');
const homeRoutes = require('./home');
const registerRoutes = require('./register');
const cableRoutes = require('./cable');
const compareplansRoutes = require('./compareplans');
const internetRoutes = require('./internet');
const phoneRoutes = require('./phone');
const cartRoutes = require('./cart');
const serviceRoutes = require('./service');
const checkoutRoutes = require('./checkout');
const constructorMethod = (app) => {
  app.use('/', authRoutes);
  app.use('/home', homeRoutes);
  app.use('/register', registerRoutes);
  app.use('/login', registerRoutes);
  app.use('/cable', cableRoutes);
  app.use('/compareplans', compareplansRoutes);
  app.use('/internet', internetRoutes);
  app.use('/phone', phoneRoutes);
  app.use('/cart', cartRoutes);
  app.use('/service', serviceRoutes);
  app.use('/checkout', checkoutRoutes);
  app.use('*', (req, res) => {
    res.status(404).send("Page not found");
  });
};
module.exports = constructorMethod;