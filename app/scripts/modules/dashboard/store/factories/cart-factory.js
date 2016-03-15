module.exports = [function() {
  var cartItemList = [];
  var storeItem;

  function setStoreItem(item) {
    storeItem = item
  }

  function getStoreItem() {
    return storeItem;
  }

  function putToCart(cartItem) {
    cartItemList.push(cartItem);
  }

  function removeFromCart(cartItemIndex) {
    cartItemList.splice(cartItemIndex, 1);
  }

  function getCartItemList() {
    return cartItemList;
  }
  return {
    setStoreItem: setStoreItem,
    getStoreItem: getStoreItem,
    putToCart: putToCart,
    removeFromCart: removeFromCart,
    getCartItemList: getCartItemList
  }

}]
