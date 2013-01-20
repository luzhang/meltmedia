if (typeof define !== 'function') { var define = require('amdefine')(module); }

define(function() {
  return {
    alterContext : function(fn, obj) {
		return fn.apply(obj);//or fn.call(obj);
		
    },

    alterObjects : function(constructor, greeting) {
		constructor.prototype.greeting = greeting;
    },

    iterate : function(obj) {
		var array = new Array;
		for( var key in obj){
		if(obj.hasOwnProperty(key))
			array.push(key+": "+obj[key]);
		}
		return array;
    }
	
	
	
  };
});
