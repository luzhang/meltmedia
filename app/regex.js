if (typeof define !== 'function') { var define = require('amdefine')(module); }

define(function() {
  return {
    containsNumber : function(str) {
		var patt = new RegExp("[0-9]");
		return patt.test(str);
    },

    containsRepeatingLetter : function(str) {
		return /([a-zA-Z])\1/.test(str);
    },

    endsWithVowel : function(str) {
		return /[aeiouAEIOU]$/g.test(str);
    },

    captureThreeNumbers : function(str) {
		if(/[0-9]{3}/g.exec(str))
			return /[0-9]{3}/g.exec(str)[0];
		else 
			return false;
    },

    matchesPattern : function(str) {
		return /^[0-9]{3}-[0-9]{3}-[0-9]{4}$/g.test(str);

    },
    isUSD : function(str) {
		return /^\$[0-9]{1,3}(,[0-9]{3})*(\.[0-9]{2})?$/.test(str);
    }
  };
});
