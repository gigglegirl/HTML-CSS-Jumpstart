moduleVariable.controller("studentsCtrl",function($state,$scope,studentTotals){
   $scope.name = "laxmi";
   $scope.flag= true;
      $scope.students =[ {
         name: "laxmi",
          age:"27",
          id:"1"
        },{
        name: "Ashish",
        age:"27",
        id:"2"
      },
      {
        name: "Muddu",
        age:"27",
        id:"2"
      }];

      $scope.studentsSearch = function(){
        // Activating studentsSearch state using go() method
        $state.go("studentsSearch",{name:$scope.name}); //passing the parameter in studentsSearch state
      }
      console.log("student total is"+studentTotals.count);
});

