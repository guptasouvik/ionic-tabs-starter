module.exports = [
  '$state',
  function($state) {
    var vm = this;
    console.log("In albums controller");

    vm.albums = [{
      name: 'album1'
    }, {
      name: 'album2'
    }, {
      name: 'album3'
    }, {
      name: 'album4'
    }, {
      name: 'album5'
    }, {
      name: 'album6'
    }, {
      name: 'album7'
    }, {
      name: 'album8'
    }, ];
  }
];
