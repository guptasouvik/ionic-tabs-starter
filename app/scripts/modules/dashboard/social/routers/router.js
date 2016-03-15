'use strict';

module.exports = ['$stateProvider', function($stateProvider) {
  $stateProvider
    .state('app.dashboard.social', {
      url: '^/social',
      views: {
        "dashboard-social": {
          template: require('../templates/social.html'),
          controller: 'KeyController'
        }
      }
    });
}];
