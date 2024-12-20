const authData = require('./auth');
const cartData = require('./cart');
const checkoutData = require('./checkout');
const itemData = require('./item');
module.exports = {
  auth: authData,
  cart: cartData,
  checkout: checkoutData,
  item: itemData
};