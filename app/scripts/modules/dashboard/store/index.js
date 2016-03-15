'use strict';

module.exports = angular.module('dashboard.store', [])
  .config(require('./routers/router'))
  .controller('SoundboardController', require('./controllers/soundboard-controller'))
  .controller('ApparelController', require('./controllers/apparel-controller'))
  .controller('ApparelDetailsController', require('./controllers/apparel-details-controller'))
  .factory('Cart', require('./factories/cart-factory.js'))
  .controller('CheckoutController', require('./controllers/checkout-controller'))
  .controller('AlbumsController', require('./controllers/albums-controller'))
  .service('CheckoutService', require('./services/checkout-service'));
