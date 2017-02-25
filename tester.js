angular.module('directive-lecture')
    .directive('testDir', function(){
      return {
        templateUrl: 'testDir.html',
        restrict: 'E', //restrict element
        // restrict 'A' //restrict to attribute
        // restrict 'AE' //restrict to attricbute or element
        scope: {
          // name: '=myName'
          name: '=', //two way binding
          lastName: '@', //string binding
          alertName: '&' //passes functions
        }
      }
    })
