module.exports = ['$scope',
  '$ionicHistory',
  '$cordovaMedia',
  'Cart',
  function($scope,
    $ionicHistory,
    $cordovaMedia,
    Cart) {
    var vm = this,
      audio;

    vm.soundOn = [{
      "on": false
    }, {
      "on": false
    }];
    // Cart 
    vm.cartItem = [{
      "added": false
    }, {
      "added": false
    }];

    vm.cartButtonText = "Add to Cart";
    vm.cartAddedButtonText = "Added to Cart";
    vm.addCart = function(index) {
      vm.cartItem[index].added = true;
      var item = {
        id: index,
        soundItemFlag: true,
        price: 5
      };
      Cart.putToCart(item);
    };

    $scope.goBack = function() {
      $ionicHistory.goBack();
    };
    var mediaStatusCallback = function(status) {
      if (status == 1) {
        console.log('1');
      } else {
        console.log('status');
      }
    }
    vm.playSound = function(src) {
      var media = new Media('./resources/audio/SampleAudio.mp3', null, null, mediaStatusCallback);
      media.play();
      // audio.play();
    }

    // Sample Audio play
    // audio = new Audio('./resources/audio/SampleAudio.mp3');
    vm.previewText = 'Preview';
    vm.streamingText = 'Streaming';
    vm.preview = function(index) {
      // if (audio.paused) {
      //   audio.play();
      //   vm.soundOn[index].on = true;
      //   console.log("play", audio);
      // } else {
      //   audio.pause();
      //   vm.soundOn[index].on = false;
      //   console.log("pause", audio);
      // }
      vm.playSound();
    };

  }
];
