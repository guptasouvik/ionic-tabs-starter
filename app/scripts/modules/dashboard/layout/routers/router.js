'use strict';

module.exports = ['$stateProvider',
  '$ionicConfigProvider',
  function($stateProvider,
    $ionicConfigProvider) {
    $stateProvider
      .state('app.dashboard', {
        url: '^/dashboard',
        // abstract: true,
        template: require('../templates/dashboard.html')
      });

    // $ionicConfigProvider
    $ionicConfigProvider.tabs.style('standard');
    $ionicConfigProvider.tabs.position('bottom');
  }
];
