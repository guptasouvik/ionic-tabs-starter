'use strict';

module.exports = ['$stateProvider',
  '$ionicConfigProvider',
  function($stateProvider,
    $ionicConfigProvider) {
    $stateProvider
      .state('app.dashboard.store', {
        url: '^/store',
        views: {
          "dashboard-store": {
            template: require('../templates/storelayout.html')
          }
        }
      })
      .state('app.dashboard.store.filmsalbums', {
        url: '^/filmsalbums',
        views: {
          "store-filmsalbums": {
            template: require('../templates/albums.html'),
            controller: 'AlbumsController as vm'
          }
        }

      })
      .state('app.dashboard.store.soundboard', {
        url: '^/soundboard',
        views: {
          "store-soundboard": {
            template: require('../templates/soundboard.html'),
            controller: 'SoundboardController as vm'
          }
        }

      })
      .state('app.dashboard.store.apparel', {
        url: '^/apparel',
        views: {
          "store-apparel": {
            template: require('../templates/apparel.html'),
            controller: 'ApparelController as vm'
          }
        }
      })
      .state('app.dashboard.store.appareldetails', {
        url: '^/appareldetails',
        views: {
          "store-apparel": {
            template: require('../templates/appareldetails.html'),
            controller: 'ApparelDetailsController as vm'
          }
        }
      })
      .state('app.dashboard.store.checkout', {
        url: '^/checkout',
        views: {
          "store-checkout": {
            template: require('../templates/checkout.html'),
            controller: 'CheckoutController as vm'
          }
        }
      })
      .state('app.dashboard.store.paymentshipping', {
        url: '^/paymentshipping',
        views: {
          "store-checkout": {
            template: require('../templates/payment-shipping.html'),
            controller: 'CheckoutController as vm'
          }
        }
      })
      .state('app.dashboard.store.confirmation', {
        url: '^/confirmation',
        views: {
          "store-checkout": {
            template: require('../templates/confirmation.html'),
            controller: 'CheckoutController as vm'
          }
        }
      })

    $ionicConfigProvider.backButton.text('').icon('my-back-button').previousTitleText(false);
  }
];
