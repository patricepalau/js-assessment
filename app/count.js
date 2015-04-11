if (typeof define !== 'function') { var define = require('amdefine')(module); }

define(function () {
  return {
    count : function (start, end) {
    	var timeouts = [];
    	for (var i = start; i <= end; i++) {
    		(function () {
    			var j = i;
    			timeouts.push(setTimeout(function () {
	    			console.log(j);
	    		}, 100 * j));
    		})();
    	}
    	return {
    		cancel: function () {
    			timeouts.forEach(function (timeout) {
    				clearTimeout(timeout);
    			});
    		}
    	};
    }
  };
});