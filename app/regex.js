if (typeof define !== 'function') { var define = require('amdefine')(module); }

define(function() {
  return {
    containsNumber : function(str) {
        var reg = /\d/;

        return reg.test(str);
    },

    containsRepeatingLetter : function(str) {
        var reg = /([A-Za-z])\1{1}/;
        return reg.test(str);
    },

    endsWithVowel : function(str) {
        return /[aeiouAEIOU]$/.test(str);
    },

    captureThreeNumbers : function(str) {
        var reg = /(\d{3})/;
        var matches = str.match(reg);
        
        return (matches && matches.length ? matches[0] : false);
    },

    matchesPattern : function(str) {
        var reg = /^\d{3}-\d{3}-\d{4}$/;
        return reg.test(str);
    },

    isUSD : function(str) {
        var reg = /^\$\d+(,\d{3},\d{3})*(\.\d+)*$/;
        return reg.test(str);
    }
  };
});
