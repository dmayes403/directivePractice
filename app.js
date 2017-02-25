angular.module('directive-lecture', [])
    .controller('mainCtrl', function($scope){
      $scope.test = 'test';
      $scope.name = 'David';

      $scope.whatsMyName = function(firstName, lastName){
        alert('Your name is ' + firstName + ' '+ lastName);
      }
    })
