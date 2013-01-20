if (typeof define !== 'function') { var define = require('amdefine')(module); }

define([ 'jquery' ], function($) {
  return {
    async : function(value) {
		var dfd = new jQuery.Deferred();
		setTimeout(function(){
			dfd.resolve(value);
		},200);
		return dfd.promise();
    },

    manipulateRemoteData : function(url) {
	var dfd = new jQuery.Deferred();
	 $.ajax(url).then(function(data) {
	 var people = new Array();
	for( var i =0; i<data.people.length;i++){
		people.push(data.people[i].name);
	}	
        dfd.resolve(people.sort());
      });
		return dfd.promise();

    }
  };
});
