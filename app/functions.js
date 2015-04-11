if (typeof define !== 'function') { var define = require('amdefine')(module); }

define(function() {
  return {
    argsAsArray : function(fn, arr) {
        return fn.apply(null, arr);
    },

    speak : function(fn, obj) {
        return fn.apply(obj);
    },

    functionFunction : function(str) {
        return function (str2) {
            return str + ', ' + str2;
        }
    },

    makeClosures : function(arr, fn) {
        var result = [];

        arr.forEach(function (item) {
            result.push(function () {
                return fn.call(null, item);
            })
        });

        return result;
    },

    partial : function(fn, str1, str2) {
        return function (str3) {
            return fn(str1, str2, str3);
        }
    },

    useArguments : function() {
        var total = 0;
        for (var i = 0; i < arguments.length; i++) {
            total += arguments[i];
        }
        return total;
    },

    callIt : function(fn) {
        var args = [].slice.call(arguments, 1);
        fn.apply(null, args);
    },

    partialUsingArguments : function(fn) {
        var args = [].slice.call(arguments, 1);

        return function () {
            var fullArgs = [];
            args.forEach(function (item) {
                fullArgs.push(item);
            });
            for (var i = 0; i < arguments.length; i++) {
                fullArgs.push(arguments[i]);
            }
            return fn.apply(null, fullArgs);
        };
    },

    curryIt : function(fn) {
        // simple solution, assuming a known nb of params
        return function (x) {
            return function (y) {
                return function (z) {
                    return fn(x, y, z);
                }
            };
        };
    }
  };
});
