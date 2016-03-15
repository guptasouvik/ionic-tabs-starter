'use strict';

module.exports = angular.module('social', [])
  .config(require('./routers/router'))
  .controller('KeyController', require('./controllers/key-controller'));
