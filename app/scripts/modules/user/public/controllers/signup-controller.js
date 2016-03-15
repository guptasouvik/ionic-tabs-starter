module.exports = [
  '$scope',
  '$state',
  '$ionicHistory',
  '$ionicNavBarDelegate',
  function($scope, $state, $ionicHistory, $ionicNavBarDelegate) {
    console.log('Inside SignUpController');
    // $ionicHistory.clearHistory();
    $ionicNavBarDelegate.showBackButton(false);
  }
]
