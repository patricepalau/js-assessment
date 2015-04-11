if (typeof define !== 'function') { var define = require('amdefine')(module); }

define([ 'jquery' ], function($) {
  return {
    async : function(value) {
    	return new Promise(function (resolve) {
    		resolve(value);
    	});
    },

    manipulateRemoteData : function(url) {
    	return new Promise(function (resolve, reject) {
    		$.getJSON(url).done(function (data) {
    			var result = data.people.map(function (item) {
    				return item.name;
    			});
    			resolve(result.sort());
    		});
    	});
    }
  };
});
