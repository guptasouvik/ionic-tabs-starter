'use strict';

module.exports = angular.module('kevintv', [])
  .config(require('./routers/router'))
  .controller('KevinTvController', require('./controllers/kevintv-controller'));
