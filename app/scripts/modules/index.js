'use strict';

module.exports = angular.module('modules', [
  require('./common').name,
  require('./user').name,
  require('./dashboard').name
]);
