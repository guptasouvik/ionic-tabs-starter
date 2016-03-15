'use strict';

angular.module('app', [
    'ionic',
    'ngCordova',
    'ngCordovaOauth',
    require('./modules').name,
    require('./util').name
    // require('./modules/login/login.module').name
  ])
  .run([
    '$ionicPlatform',
    '$state',
    '$rootScope',
    '$cordovaNetwork',
    '$ionicPopup',
    '$window',
    function($ionicPlatform,
      $state,
      $rootScope,
      $cordovaNetwork,
      $ionicPopup,
      $window) {

      $ionicPlatform.ready(function() {

        if (window.cordova && window.cordova.plugins.Keyboard) {
          cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
        }

        if (window.StatusBar) {
          StatusBar.styleDefault();
        }

        $rootScope.$on('$cordovaNetwork:offline', function(event, networkState) {
          console.log('offline');
          if (navigator && navigator.splashscreen) {
            navigator.splashscreen.hide();
          }
        });

        if (navigator && navigator.splashscreen) {
          // window.setTimeout(function() {
          navigator.splashscreen.hide();
          // }, 100);
        }

        //Back Button Disable 
        $ionicPlatform.registerBackButtonAction(function() {
          event.preventDefault();
        }, 100);

        /* 
        // Push Notification Configuration
        var push = PushNotification.init({
          "android": {
            "senderID": "651503458573" // project token number (12 digit)
          },
          "ios": {
            "alert": "true",
            "badge": "true",
            "sound": "true"
          }
        });

        // register device with APNS and GCM

        push.on('registration', function(data) {
          console.log("Data", data);
          // save device token in local storage
          (data.registrationId) && ($window.localStorage.registerPushId = data.registrationId) // data.registrationId
        });

        push.on('notification', function(data) {
          // data.message,
          // data.title,
          // data.count,
          // data.sound,
          // data.image,
          // data.additionalData
          var isIOS = ionic.Platform.isIOS();
          var isAndroid = ionic.Platform.isAndroid();
          if (isIOS) {
            $ionicPopup.alert({
              title: "Push Notification Received",
              template: data.message, // ios message
              okType: "button-balanced"
            });
          } else if (isAndroid) {
            $ionicPopup.alert({
              title: "Push Notification Received",
              template: data.additionalData.mp_message, // android message format
              okType: "button-balanced"
            });
          }

          console.log("Push Notification Data", data);

        });

        push.on('error', function(e) {
          // e.message
          console.log("Error in push", e.message);
        });      */

        console.log('app start');
        // $rootScope.$on('$stateChangeError', function() {
        //   //console.log(arguments);
        // });

      });

    }
  ])
  .config([
    '$stateProvider',
    '$urlRouterProvider',
    '$ionicConfigProvider',
    function($stateProvider, $urlRouterProvider, $ionicConfigProvider) {
      $ionicConfigProvider.views.maxCache(0);
      $urlRouterProvider.otherwise('/signin');

    }
  ]);
