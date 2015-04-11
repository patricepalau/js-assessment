if (typeof define !== 'function') { var define = require('amdefine')(module); }

define(function() {
  return {
    valueAtBit: function(num, bit) {
        // first solution:
        // var arr = [];
        // for (var i = 0; i < 8; i++) {
        //     arr.push(bit - 1 === i ? '1': '0');
        // }

        // var mask = parseInt(arr.reverse().join(''), 2);
        // return num & mask ? 1 : 0;

        // better solution:
        // using the right shift operator
        // shifting bit-1 times to the right leaves us
        // with the bit we want to test
        var bitToBeTested = num >> (bit - 1);
        // finally a logical and with 1 with nullifies all bits
        // except the last one
        return 1 & bitToBeTested;
    },

    base10: function(str) {
        return parseInt(str, 2);
    },

    convertToBinary: function(num) {
        // first solution:
        // var result = [];
        // while (num !== 0) {
        //     if (num % 2 === 1) {
        //         result.push('1');
        //         num = num - 1;
        //     }
        //     else {
        //         result.push('0');
        //     }
        //     num = num / 2;
        // }
        
        // var nbZeros = 8 - result.length;
        // while (nbZeros--) {
        //     result.push('0');
        // }
        // return result.reverse().join('');

        // better solution:
        // test num against 1000000,01000000,00100000, etc.
        var arr = [];
        for (i = 8; i >=1; i--) {
            var mask = 1 << (i - 1);
            // now testing num against the mask with a logical AND
            // gives the value of the ith bit
            arr.push(num & mask ? "1": "0")
        }
        return arr.join('');
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

