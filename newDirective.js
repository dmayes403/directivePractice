angular.module('directive-lecture')
    .directive('myNewDir', function(){
      return {
        templateUrl: 'myNewDir.html',
        restrict: 'E',
        scope: {
            firstName: '='
        },
        link: function(scope, element, attributes){ //must be in this order!!
            console.log(scope.firstName)
            console.log(element)
            console.log(attributes)
            element.css({'color': 'blue'})
            // element.text(scope.firstName)
            //the link is primarliy for DOM manipulation
        },
        controller: function($scope, mainService){
            // $scope.alertName = function(){
            //   alert($scope.firstName)
            // }

            $scope.getData = function(){
              $scope.myRandomArray = mainService.returnSomedata();
            }
        }
      }
    })
