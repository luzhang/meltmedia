if (typeof define !== 'function') { var define = require('amdefine')(module); }

define(function() {
  return {
    argsAsArray : function(fn, arr) {
		return fn.apply(this,arr);
		
    },

    speak : function(fn, obj) {
		return fn.call(obj);
    },

    functionFunction : function(str) {
		return function(arg){
			 return str+", "+arg;
		}
    },

    makeClosures : function(arr, fn) {

		var functions = new Array;
		var len = arr.length;
		var function_2 = function(val) {
				return function(){ 
					   return fn(val);
					}; 
					}
		for(var i = 0; i< len; i++){
			functions.push(function_2(arr[i]));
		}
		return functions;
    },

    partial : function(fn, str1, str2) {
		return function(arg){
			return fn(str1,str2,arg);
		}
    },

    useArguments : function() {
		var len =arguments.length;
		var sum = 0 ;
		for(var i =0; i<len; i++)
			sum +=arguments[i]; 
		return sum;
    },

    callIt : function(fn) {
		var args = Array.prototype.slice.call(arguments,1);
		fn.apply(null,args);//use apply to load an array args, null will be replaced with global object
    },

    curryIt : function(fn) {
		var args = Array.prototype.slice.call(arguments,1);
		var args_array = new Array();
		for(var i = 0; i< args.length;i++){
			args_array.push(args[i]);
		}
		return function (){
		for(var i = 0; i< arguments.length;i++){
			args_array.push(arguments[i]);
		}// get all arguments
			return fn.apply(null,args_array);
		}

		
    }
  };
});
