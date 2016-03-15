'use strict';

module.exports = ['$stateProvider', function($stateProvider) {
  $stateProvider
    .state('app.dashboard.activism', {
      url: '^/activism',
      views: {
        "dashboard-activism": {
          template: require('../templates/activism.html')
        }
      }
    })
}];
