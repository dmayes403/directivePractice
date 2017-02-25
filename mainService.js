angular.module('directive-lecture')
    .service('mainService', function($http){

          this.returnSomedata = function(){
            return [1,2,3,4,5];
          }

    })
