//way 1 
/*function myObject(name){
	this.getFactoryValue = function(){
		return name
	}
}

moduleVariable.factory("myFactory",function(){
 return new myObject("laxmi")
})
*/
//way 2 
moduleVariable.factory("myFactory",function(){
 return new function myObject(){
	this.getFactoryValue = function(){
		return "My Factory"
	}
 }
})
// does not works if removing new keyword
/*moduleVariable.factory("myFactory",function(){
 return new function myObject(){
	this.getFactoryValue = function(){
		return "My Factory"
	}
 }
})*/

/*function Person(name){
	this.name = name;
}

moduleVariable.factory("myFactory",function(){
 return new Person("laxmi")
})*/

//factory can return value but same cant be done by a service
/*moduleVariable.factory("myFactory",function(){
	console.log("myFactory  called");
    return "laxmi"
})*/