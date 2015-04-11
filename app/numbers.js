if (typeof define !== 'function') { var define = require('amdefine')(module); }

define(function() {
  return {
    valueAtBit: function(num, bit) {
        var arr = [];
        for (var i = 0; i < 8; i++) {
            arr.push(bit - 1 === i ? '1': '0');
        }

        var mask = parseInt(arr.reverse().join(''), 2);
        return num & mask ? 1 : 0;
    },

    base10: function(str) {
        return parseInt(str, 2);
    },

    convertToBinary: function(num) {
        var result = [];
        while (num !== 0) {
            if (num % 2 === 1) {
                result.push('1');
                num = num - 1;
            }
            else {
                result.push('0');
            }
            num = num / 2;
        }
        
        var nbZeros = 8 - result.length;
        while (nbZeros--) {
            result.push('0');
        }
        return result.reverse().join('');
    },

    multiply: function(a, b) {
        var _b = b + '';

        var index = _b.indexOf('.');
        var nbAfterDigits = _b.length - index - 1;
        if (nbAfterDigits > 0) {
            b = b * Math.pow(10, nbAfterDigits);
        }

        return (a * b) / Math.pow(10, nbAfterDigits);
    }
  };
});

