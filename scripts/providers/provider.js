//while writing provider name directly accessing the $get function bydefault
/*moduleVariable.provider("myProvider",function(){
 this.$get = function(){
 	return "I am provider"
 }
})
*/

//more function & values can be added and $get will get called by default
moduleVariable.provider("myProvider",function(){
 this.value = "old value";

 this.setValue = function(){
 	this.value = "new value"
 }
 this.$get = function(){
 	return this.value
  }
})

//to just return a value , special case , if defining again it will overwrite the first one , remove one and can verify
/*moduleVariable.value("myProviderValue","I am value");
moduleVariable.value("myProviderValue","I can override above value");*/


//to just return a constant if defining again also it will take the function one only
/*moduleVariable.constant("myProviderConstant","I cant be overridden");
moduleVariable.constant("myProviderConstant","I am overridden wchich is not possible");*/

