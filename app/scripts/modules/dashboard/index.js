'use strict';

module.exports = angular.module('dashboard', [
  require('./account').name,
  require('./activism').name,
  require('./kevintv').name,
  require('./layout').name,
  require('./social').name,
  require('./store').name
]);
