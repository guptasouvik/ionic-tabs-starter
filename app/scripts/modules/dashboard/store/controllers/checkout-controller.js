module.exports = ['Cart',
  'CheckoutService',
  '$ionicPopup',
  function(Cart,
    CheckoutService,
    $ionicPopup) {
    var vm = this;
    vm.cartItemList = Cart.getCartItemList(); // Get Cart Item List
    vm.subtotalItems = vm.cartItemList.length;
    vm.totalPrice = CheckoutService.getSubtotalPrice();
    console.log("totalPrice:", vm.totalPrice);
    // vm.number = [{
    //   'index': true
    // }, {
    //   'index': true
    // }];
    // vm.number = [];
    // for (var i = 0; i < vm.cartItemList.length; i++) {
    //   vm.number.push({
    //     'index': true
    //   });
    // }
    vm.removeCartItem = function(index) {
      console.log("Item index", index);
      // vm.number[index].index = false;
      Cart.removeFromCart(index);
      vm.totalPrice = CheckoutService.getSubtotalPrice();
      console.log("totalPrice:", vm.totalPrice);
    };


    // Home Radio 
    vm.homeAddress = true;
    vm.homeRadio = function() {
      if (vm.homeAddress) {
        vm.homeAddress = false;
      } else {
        vm.homeAddress = true;
      }
    };

    // Edit Shipping Address
    vm.editAddress = function() {
      var editAddress = $ionicPopup.show({
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
    };

    // Add Shipping Address 
    vm.newShippingAddress = function() {
      var editAddress = $ionicPopup.show({
        template: require('../../../user/public/templates/changeaddress.html'),
        title: 'Add New Shipping Address',
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
    };


  }
];
