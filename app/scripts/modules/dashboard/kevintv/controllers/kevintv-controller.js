module.exports = [
  '$scope',
  '$state',
  '$ionicLoading',
  '$ionicPopup',
  function($scope, $state, $ionicLoading, $ionicPopup) {
    $scope.search = {
      text: ''
    };
    $scope.videos = [{
      videoLink: 'https://www.youtube.com/watch?v=tcEpHnaZMgg',
      videoThumbnail: 'resources/images/thumbnail1.jpg',
      videoName: 'DJ Khaled Talks Fuccbois',
      videoDate: '1 day to go',
      videoDuration: '4 mins'
    }, {
      videoLink: 'https://www.youtube.com/watch?v=skY-FKgOIew',
      videoThumbnail: 'resources/images/thumbnail2.jpg',
      videoName: "DJ Khaled's Words of Wisdom",
      videoDate: '1 day to go',
      videoDuration: '4 mins'
    }, {
      videoLink: 'https://www.youtube.com/watch?v=7AZ3kYNftEs',
      videoThumbnail: 'resources/images/thumbnail3.jpg',
      videoName: 'Complex Closet',
      videoDate: '1 day to go',
      videoDuration: '4 mins'
    }, {
      videoLink: 'https://www.youtube.com/watch?v=nF-Wz_RFeMg',
      videoThumbnail: 'resources/images/thumbnail4.jpg',
      videoName: "DJ Khaled's Inspirational Message for Jeb Bush",
      videoDate: '1 day to go',
      videoDuration: '4 mins'
    }, {
      videoLink: 'https://www.youtube.com/watch?v=Zy7my5L9dF8',
      videoThumbnail: 'resources/images/thumbnail5.jpg',
      videoName: 'DJ Khaled on Snapchat',
      videoDate: '1 day to go',
      videoDuration: '4 mins'
    }, {
      videoLink: 'https://www.youtube.com/watch?v=W5toELZSx7c',
      videoThumbnail: 'resources/images/thumbnail7.jpg',
      videoName: "DJ Khaled's Finga Licking",
      videoDate: '1 day to go',
      videoDuration: '4 mins'
    }];


    $scope.openLink = function(link) {

      $ionicLoading = true;
      $ionicPopup.confirm({
        template: '<embed-video href="' + link + '" width="100%"></embed-video>',
        title: 'Youtube Video',
        cssClass: 'instagram-popup',
        scope: $scope,
        buttons: [{
          text: 'Close',
          type: 'button-primary ',
        }]

      });
    };
  }
];
