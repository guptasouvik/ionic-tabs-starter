'use strict';

module.exports = ['$stateProvider', function($stateProvider) {
  $stateProvider
    .state('app.signin', {
      url: '^/signin',
      template: require('../templates/signin.html'),
      controller: 'SignInController as vm'
    })
    .state('app.signup', {
      url: '^/signup',
      template: require('../templates/signup.html'),
      controller: 'SignUpController'
    })
    .state('app.recoverpassword', {
      url: '^/recoverpassword',
      template: require('../templates/recoverpassword.html'),
      controller: 'RecoverPasswordController'
    })
    .state('app.changeaddress', {
      url: '^/changeaddress',
      template: require('../templates/changeaddress.html')
    })
}];
