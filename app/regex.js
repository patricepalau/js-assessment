if (typeof define !== 'function') { var define = require('amdefine')(module); }

define(function() {
  return {
    containsNumber : function(str) {
        return /\d/.test(str);
    },

    containsRepeatingLetter : function(str) {
        //var reg = /([A-Za-z])\1{1}/;
        // {1} is not necessary since the backreference ("\1")
        // already implies than one of the captured character
        // is repeated at least once
        var reg = /([A-Za-z])\1/;
        return reg.test(str);
    },

    endsWithVowel : function(str) {
        //return /[aeiouAEIOU]$/.test(str);
        // using the case insensitive flag instead ("i")
        return /[aeiou]$/i.test(str);
    },

    captureThreeNumbers : function(str) {
        //var reg = /(\d{3})/;
        // no need to use a capturing group
        var matches = str.match(/\d{3}/);
        // returns the first match if there is one, false otherwise
        return (matches && matches.length ? matches[0] : false);
    },

    matchesPattern : function(str) {
        return /^\d{3}-\d{3}-\d{4}$/.test(str);
    },

    isUSD : function(str) {
        // issues with this regex:
        // - allows $1000,000,000 (first group after $ has more than 3 digits)
        // - allows $10.1111 (more than 2 decimals)
        //var reg = /^\$\d+(,\d{3},\d{3})*(\.\d+)*$/;
        // this one fixes the decimal issue
        //var reg = /^\$\d+(,\d{3},\d{3})*(\.\d{2})$/;

        //
        // proper solution:
        // ^\$:         starts with a $ sign
        // \d{1,3}:     between 1 to 3 digits
        // (,\d{3})*:   0 or more groups such as ",123"
        // (\.\d{2})?:  optional group such as ".99"
        //
        return /^\$\d{1,3}(,\d{3})*(\.\d{2})?$/.test(str);
    }
  };
});
