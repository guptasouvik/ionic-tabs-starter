module.exports = ['$state',
  'Cart',
  function($state,
    Cart) {
    var vm = this;
    console.log("In apparel controller");
    // Apparel Controller
    vm.apparels = [{
      title: 'Another One DJ Khaled',
      price: 24.99,
      sizes: ['S', 'M', 'L', 'XL', '2XL', '3XL'],
      thumbnail: 'apparel1'
    }, {
      title: 'Blue Another One Slides',
      price: 65.00,
      sizes: ['3', '4', '5', '6', '7', '8', '9', '10', '11', '12', '13', '14'],
      thumbnail: 'apparel2'
    }, {
      title: 'DJ Khaled X BeardSace Collab Hoodie',
      price: 55.00,
      sizes: ['S', 'M', 'L', 'XL', '2XL', '3XL'],
      thumbnail: 'apparel3'
    }, {
      title: "Women's Black Bless Up",
      price: 24.99,
      sizes: ['XS', 'S', 'M', 'L', 'XL', '2XL'],
      thumbnail: 'apparel4'
    }, {
      title: 'White Bless Up iSlides',
      price: 65.00,
      sizes: ['5', '6', '7', '8', '9', '10'],
      thumbnail: 'apparel5'
    }, {
      title: 'Bow Down iSlides',
      price: 65.00,
      sizes: ['3', '4', '5', '6', '7', '8', '9', '10', '11', '12', '13', '14'],
      thumbnail: 'apparel6'
    }, {
      title: 'Red Another One Top V2',
      price: 65.00,
      sizes: ['3', '4', '5', '6', '7', '8', '9', '10', '11', '12', '13', '14'],
      thumbnail: 'apparel7'
    }, {
      title: "Women's White We The Best",
      price: 24.99,
      sizes: ['XS', 'S', 'M', 'L', 'XL', '2XL'],
      thumbnail: 'apparel8'
    }];

    vm.goToApparelDetails = function(item) {
      Cart.setStoreItem(item);
      $state.go('app.dashboard.store.appareldetails');
      console.log("Item", Cart.getStoreItem(item));
      vm.apparel = Cart.getStoreItem(item);
    };
    //Apparel Details Controller
    vm.cartItemAdded = false;
    vm.cartButtonText = "Add to Cart";
    vm.cartAddedButtonText = "Added to Cart";
    vm.apparelItem = Cart.getStoreItem();
    vm.addCart = function(index) {
      vm.cartItemAdded = true;
      var item = {
        id: index,
        apparelItemFlag: true,
        price: 9
      };
      Cart.putToCart(item);
    };
  }
];
