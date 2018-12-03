var moduleVariable = angular.module('myApp',['ui.router']);

moduleVariable.config(function($stateProvider,$urlRouterProvider, $locationProvider){   //location provider enabling html5 mode routing and # can be removed fro HTML file for routing
   $stateProvider
       .state("/",{
         	url:"/",
	   	    templateUrl : "../../home.html",
	   	    controller : "homeCtrl",
	   	    data:{
	   	    	homeCustomData1:"home custome data ",
	   	    	homeCustomData1:"home custome data "
	   	    }
	   })
	   .state('page1',{
	   	    url:"/page1",
	   	    templateUrl : "../../views/page1.html",
	   	    controller : "homeCtrl2"
	   })
	   .state('page2',{
	   	    url:"/page2",
	   	    templateUrl : "../../views/page2.html",
	   	    controller : "homeCtrl3"
	   })
	   .state('studentParent',{
	   	    url:"/students",
	   	    templateUrl : "../../views/studentParent.html",
	   	    controller : "studentParentCtrl",
	   	    resolve: {
	   	    	studentTotals:function($http){
                      return $http.get("https://swapi.co/api/people/")
                             .then(function(response){
                                   return response.data;
                      })
	   	    	}
	   	    },
	   	    abstract:true
	   	    
	   })
	   .state('studentParent.students',{
	   	    url:"/studentParent",
	   	    templateUrl : "../../views/students.html",
	   	    controller : "studentsCtrl",
	   	    data:{
	   	    	studentCustomData1:"student custom data 1",
	   	    	studentCustomData1:"student custome data 2"
	   	    }
	   })
	   .state('studentParent.studentDetails',{
	   	    url:"/student/:id",
	   	    templateUrl : "../../views/studentDetails.html",
	   	    controller : "studentDetailsCtrl"
	   })
	   .state('studentsSearch',{
	   	    url:"/studentsSearch/:name",
	   	    templateUrl : "../../views/studentsSearch.html",
	   	    controller : "studentsSearchCtrl"
	   });
	   $urlRouterProvider.otherwise('/');

	   $locationProvider.html5Mode({
		      enabled: true,
		      requireBase: false
		});
})