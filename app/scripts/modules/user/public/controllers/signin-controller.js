module.exports = [
  '$scope',
  '$state',
  '$ionicNavBarDelegate',
  '$timeout',
  function($scope, $state, $ionicNavBarDelegate, $timeout) {
    var vm = this;
    vm.changeBackButtonSetting = function() {
      console.log("changeBackButtonSetting");
      $timeout(function() {
        $ionicNavBarDelegate.showBackButton(true)
      }, 0);
    };
    console.log('Inside SignInController');
    $scope.doLogin = function() {
      console.log('Form Submitted');
      $state.go('app.dashboard');
    }
  }
]
