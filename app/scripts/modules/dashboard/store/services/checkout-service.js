module.exports = ['Cart',
  function(Cart) {

    function getSubtotalPrice() {
      var cartItemList = Cart.getCartItemList(),
        totalPrice = 0;
      angular.forEach(cartItemList, function(value, key) {
        totalPrice += value.price;
      });
      return totalPrice;
    }

    return {
      getSubtotalPrice: getSubtotalPrice
    }

  }
]
