'use strict';

module.exports = angular.module('user.public', [])
  .config(require('./routers/router'))
  .controller('SignInController', require('./controllers/signin-controller'))
  .controller('SignUpController', require('./controllers/signup-controller'))
  .controller('RecoverPasswordController', require('./controllers/recoverpassword-controller'));
