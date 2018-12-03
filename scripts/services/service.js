
//working fine
/*moduleVariable.service("myService",function(){
 return new function myObject(){
	this.getServiceValue = function(){
		return "returned by service"
	}
 }
})*/

// does not works if removing new keyword
/*moduleVariable.service("myService",function(){
 return new function myObject(){
	this.getServiceValue = function(){
		return "My service"
	}
 }
})*/

//working fine returns value when written inside function
moduleVariable.service("myService",function(){
	
		this.obj = "laxmi"
		return this.obj;

})

//return object 
/*moduleVariable.service("myService",function(){
	this.getServiceValue = function(){
		var obj = {name:"laxmi"}
		return obj;
 }
})*/

 //its working but in video said it will not
/*function Person(name){
	this.name = name;
}

moduleVariable.service("myService",function(){
	console.log("service function100 called");
 return new Person("singh")
})*/

//this will not return value , because service cant return value , it has to be in function,but same can be done by a factory
/*moduleVariable.service("myService",function(){
	console.log("service function100 called");
    return "laxmi"
})*/

//in this case value is retuirned using function so it will displayed , although without function it cant work
/*moduleVariable.service("myService",function(){
	this.returningValue = function(){
		 console.log("service function100 called");
         return "laxmi"
	}
	
})*/