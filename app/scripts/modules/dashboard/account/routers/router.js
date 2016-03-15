'use strict';

module.exports = ['$stateProvider', function($stateProvider) {
  $stateProvider
    .state('app.dashboard.account', {
      url: '^/account',
      // abstract: true,
      views: {
        "dashboard-account": {
          template: require('../templates/account.html')
        }
      }
    })
    .state('app.dashboard.account.settings', {
      url: '/settings',
      views: {
        "account-settings": {
          template: require('../templates/settings.html'),
          controller: 'SettingsController'
        }
      }
    })
    .state('app.dashboard.account.about', {
      url: '/about',
      views: {
        "account-about": {
          template: require('../templates/about.html')
        }
      }
    })
}];
