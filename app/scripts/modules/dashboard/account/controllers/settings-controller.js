module.exports = [
  '$scope',
  '$state',
  '$ionicPopup',
  function($scope, $state, $ionicPopup) {
    console.log('Inside Settings Controller');
    var edited;
    $scope.settings = {
      "toggle": false,
      "email": {
        "value": "abc@domain.com",
        "disabled": true
      },
      "password": {
        "value": "******",
        "disabled": true
      },
      "mobile": {
        "value": "123-456-789",
        "disabled": true
      },
      "shipping1": {
        "value": "1234 Common Road",
        "disabled": true

      },
      "shipping2": {
        "value": "Hilton Road",
        "disabled": true
      }
    }
    $scope.editSettings = function(value) {
      console.log('in edit');
      if (value === 'mobile') {
        $scope.settings.mobile.disabled = !$scope.settings.mobile.disabled;
        console.log('clicked', $scope.settings);
      } else if (value === 'password') {
        var passwordPopup = $ionicPopup.show({
          template: require('../../../user/public/templates/changepassword.html'),
          title: 'Change Password',
          cssClass: 'change-password-modal',
          scope: $scope,
          buttons: [{
            text: 'Cancel'
          }, {
            text: '<b>Save</b>',
            type: 'button-positive',
            onTap: function(e) {
              console.log('tapped');
            }
          }]
        });
      } else if (value === 'address') {
        var passwordPopup = $ionicPopup.show({
          template: require('../../../user/public/templates/changeaddress.html'),
          title: 'Edit Shipping Address',
          cssClass: 'change-address-modal',
          scope: $scope,
          buttons: [{
            text: 'Cancel'
          }, {
            text: '<b>Save</b>',
            type: 'button-positive',
            onTap: function(e) {
              console.log('tapped');
            }
          }]
        });
      }
    }
  }
]
