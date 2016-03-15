module.exports = ['$state',
  'Cart',
  function($state,
    Cart) {
    var vm = this;
    console.log("In apparel details controller");

    //Apparel Details Controller
    vm.cartItemAdded = false;
    vm.cartButtonText = "Add to Cart";
    vm.cartAddedButtonText = "Added to Cart";
    vm.apparel = Cart.getStoreItem();
    vm.addCart = function(item) {
      console.log('item', item);
      vm.cartItemAdded = true;
      // var item = {
      //   apparelItemFlag: true,
      //   price: 9
      // };
      Cart.putToCart(item);
    };
  }
];
