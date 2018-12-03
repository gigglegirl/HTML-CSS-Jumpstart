moduleVariable.controller("studentDetailsCtrl",function($http,$state,$scope,$stateParams){
     $http({
       method:"get",
       url:'https://swapi.co/api/people/' + $stateParams.id,
     }).then(function(response){
         $scope.studentDetails = response.data;
     })
});

