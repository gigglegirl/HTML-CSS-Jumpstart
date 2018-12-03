moduleVariable.controller("studentsSearchCtrl",function($http,$state,$scope,$stateParams){
     
     if($stateParams.name){
           $http({
               method:"get",
               url:'https://swapi.co/api/people/?' + $stateParams.name,
             }).then(function(response){
                 $scope.studentsSearch = response.data.results;
             })
     }else{
             $http({
               method:"get",
               url:'https://swapi.co/api/people/?' + $stateParams.name,
             }).then(function(response){
                 $scope.studentsSearch = response.data.results;
             })
     }

     
});

