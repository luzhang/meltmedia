if (typeof define !== 'function') { var define = require('amdefine')(module); }

define(function() {
  return {
    indexOf : function(arr, item) {
		var len = arr.length;
		for(var i = 0; i < len; i++){
			if (arr[i]===item){
				return i;	
			}				
		}
		return -1;

    },

    sum : function(arr) {
		var sum = 0;
		var len = arr.length;
		for(var i =0; i < len; i++){
			sum += arr[i];
		}
		return sum;
    },

    remove : function(arr, item) {
	
		var len = arr.length;
		for(var i = 0 ;i < len; i++){
			if(arr[i]==item)
				arr.splice(i,1);
		}
		return arr;
	
    },
    
    removeWithoutCopy : function(arr, item) {
		var len = arr.length;
		for(var i = 0 ;i < len; i++){
			if(arr[i]==item)
				arr.splice(i,1);
		}
		return arr;
    },

    append : function(arr, item) {
		arr.push(item);
		return arr;
    },

    truncate : function(arr) {
		 arr.pop();
		 return arr;
    },

    concat : function(arr1, arr2) {
		return arr1.concat(arr2); 
    },

    insert : function(arr, item, index) {
		arr.splice(index,0,item);
		return arr;
    },

    count : function(arr, item) {
		var count = 0;
		var len = arr.length;
		for(var i = 0 ; i< len; i++ ){
			if(arr[i]==item)
				count++;
		}
		return count;
    },

    duplicates : function(arr) {
	var result = new Array();
	var temp;
	var flag =0;
	var len = arr.length;
	arr.sort();
	for(var i =0 ; i< arr.length-1; i++){
		if(flag ==1){
			if(arr[i]==arr[i+1] && temp!=arr[i]){
				result.push(arr[i]);
				temp = arr[i];
				}
			}
		else{
			if( arr[i] == arr[i+1] ){
				result.push(arr[i]);
				temp = arr[i];
				flag = 1;
			}
		}
	}
	return result;
    },

    square : function(arr) {
		var len = arr.length;
		for(var i =0 ; i< len; i++){
			arr[i] = arr[i]*arr[i];
		}
		return arr;
    },

    findAllOccurrences : function(arr, target) {
		var result = new Array();
		var len = arr.length;
		for(var i =0; i< len-1; i++){
			if(arr[i]==target)
				result.push(i);
		}
		return result;
    }
  };
});
