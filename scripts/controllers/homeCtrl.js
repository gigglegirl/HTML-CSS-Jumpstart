//ways of controller writing

/*angular.module('myApp',[])
.controller("homeCtrl",function(){

	console.log("inside controller");

       var msgDisplay = function(){
            alert('I am controller');
       }

       msgDisplay();

})*/

moduleVariable.controller("homeCtrl",function(myProvider,$state,$scope){
       
       $scope.homeCustomData1 = $state.current.data.customData1;

       //$scope.studentCustomData1 = $state.get("studentParent.students").data.studentCustomData1;
       //alert("student custom data"+$state.get("students").data.studentCustomData1);
           // alert('provider returns ===='+myProvider);
      var students =[ {
         name: "laxmi",
          age:"27",
          id:"1"
        },{
        name: "Ashish",
        age:"27",
        id:"2"
      }];
       $scope.studentDetails = students;
});
moduleVariable.controller("homeCtrl2",function(myFactory){
            alert('factory returns ===='+myFactory);
});
moduleVariable.controller("homeCtrl3",function(myService){
           alert('service returns ===='+myService.obj);  
});
/*moduleVariable.config(function(myProviderProvider){   //suffix provider to be added after providername
	myProviderProvider.setValue()
})*/

