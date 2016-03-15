'use strict';

module.exports = ['$stateProvider', function($stateProvider) {
  $stateProvider
    .state('app.dashboard.kevintv', {
      url: '^/kevintv',
      views: {
        "dashboard-kevintv": {
          template: require('../templates/kevintv.html'),
          controller: 'KevinTvController'
        }
      }
    })
}];
