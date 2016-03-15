'use strict';

module.exports = angular.module('account', [])
  .config(require('./routers/router'))
  .controller('SettingsController', require('./controllers/settings-controller'))
  .directive('focusMe', require('./directives/focusme-directive'));
