'use strict';
var baseURL = "";
module.exports = {
  signin: baseURL + '/login',
  signup: baseURL + '/signup',
  recoverPassword: baseURL + '/user/password/new',
  getKevinTvList: baseURL + '/kevintv',
  searchKevinTvItem: baseURL + '/kevintv/search/:keyword',
  getFilmsAndAlbumsList: baseURL + '/filmandalbum',
  getSoundboardList: baseURL + '/soundboard',
  getApparelItemList: baseURL + '/apparel',
  getApparelItemDetails: baseURL + '/apparel/:id',
  payment: baseURL + '/payment',
  saveNewShippingAddress: baseURL + '/user/newaddress',
  getActivismList: baseURL + '/activism',
  getSocialFeeds: baseURL + '/feeds',
  updatePassword: baseURL + '/user/updatepassword',
  updateShippingAddress: '/user/updateaddress',
  updateMobileNumber: baseURL + '/user/updatemobile'
}
