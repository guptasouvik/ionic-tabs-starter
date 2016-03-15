module.exports = [
  '$scope',
  '$state',
  '$http',
  '$ionicPopup',
  '$ionicLoading',
  function($scope, $state, $http, $ionicPopup, $ionicLoading) {

    // $scope.search = {
    //   text: ''
    // };

    $scope.videos = [{
      videoLink: 'https://www.instagram.com/p/BAL0SQPru5j/?taken-by=djkhaled',
      videoName: 'You Mine',
      videoDate: '1 day to go',
      videoDuration: '4 mins'
    }, {
      videoLink: 'https://www.instagram.com/p/BALPVIYLuwd/?taken-by=djkhaled',
      videoName: 'How Many Times',
      videoDate: '1 day to go',
      videoDuration: '4 mins'
    }, {
      videoLink: 'https://www.instagram.com/p/_2W1gVru4_/?taken-by=djkhaled',
      videoName: 'Go To',
      videoDate: '1 day to go',
      videoDuration: '4 mins'
    }, {
      videoLink: 'https://www.instagram.com/p/_2WNNHru3Z/?taken-by=djkhaled',
      videoName: 'Hold You Down',
      videoDate: '1 day to go',
      videoDuration: '4 mins'
    }, {
      videoLink: 'https://www.instagram.com/p/_qC-uQru1a/?taken-by=djkhaled',
      videoName: 'You Mine',
      videoDate: '1 day to go',
      videoDuration: '4 mins'
    }, {
      videoLink: 'https://www.instagram.com/p/_TQNVOLu0b/?taken-by=djkhaled',
      videoName: 'You Mine',
      videoDate: '1 day to go',
      videoDuration: '4 mins'
    }];

    $scope.loadKeys = function(videos) {
      $ionicLoading = true;
      videos.forEach(function(each) {
        $http({
          method: 'JSONP',
          url: 'https://api.instagram.com/oembed/',
          params: {
            url: each.videoLink,
            callback: 'JSON_CALLBACK'
          }
        }).then(function(response) {
          // console.log(response);
          each.thumbnail = response.data.thumbnail_url;
          each.videoName = response.data.title;
          each.embedHtml = response.data.html;
        }, function(error) {
          console.log('Error', error);
        });

      });
      console.log($scope.videos);
      $ionicLoading = false;
    };


    function getEmbedVideo(html) {
      setTimeout(function() {
        window.instgrm.Embeds.process();
      }, 0);
      $scope.embedHtml = html;
      $ionicLoading = false;
      $ionicPopup.confirm({
        template: $scope.embedHtml,
        title: 'Instagram Video',
        cssClass: 'instagram-popup',
        scope: $scope,
        buttons: [{
          text: 'Close',
          type: 'button-primary ',
        }]

      });
    }

    $scope.openLink = function(html) {
      $ionicLoading = true;
      getEmbedVideo(html);
    };
  }
];
