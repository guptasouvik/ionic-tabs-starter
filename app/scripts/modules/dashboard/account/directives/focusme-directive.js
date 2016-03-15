module.exports = [
  '$timeout',
  function($timeout) {
    return {
      scope: {
        focus: '='
      },
      link: function(scope, element, attrs) {
        scope.$watch('focus', function(newValue, oldValue) {
          if (!newValue) {
            $timeout(function() {
              element[0].focus();
              if (window.cordova && window.cordova.plugins && window.cordova.plugins.Keyboard) {
                cordova.plugins.Keyboard.show(); //open keyboard manually
              }
            }, 0)
          }
        });
      }
    };
  }
];
