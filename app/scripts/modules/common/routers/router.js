'use strict';

module.exports = ['$stateProvider',
  '$ionicConfigProvider',
  function($stateProvider,
    $ionicConfigProvider) {
    $stateProvider
      .state('app', {
        url: '/app',
        abstract: true,
        template: require('../templates/app.html')
      });

    // instead of overflow - scroll = true use jsScrolling
    if (ionic.Platform.isAndroid()) {
      $ionicConfigProvider.scrolling.jsScrolling(true);
      // ionic.Platform.isFullScreen = true;
    }
    // $ionicConfigProvider
    // $ionicConfigProvider.tabs.style('standard');
    // $ionicConfigProvider.tabs.position('top');
    // $ionicConfigProvider.form.toggle('large');
  }
];
