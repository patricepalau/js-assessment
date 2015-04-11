if (typeof define !== 'function') { var define = require('amdefine')(module); }

define(function() {
  return {
    indexOf : function(arr, item) {
        return arr.indexOf(item);
    },

    sum : function(arr) {
        return arr.reduce(function (prev, item) {
            prev = prev + item;
            return prev;
        }, 0);
    },

    remove : function(arr, item) {
        return arr.filter(function (current) {
            return current !== item;
        });
    },

    removeWithoutCopy : function(arr, item) {
        var index = -1;
        while((index = arr.indexOf(item)) !== -1) {
            arr.splice(index, 1);
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

    prepend : function(arr, item) {
        arr.unshift(item);
        return arr;
    },

    curtail : function(arr) {
        arr.shift();
        return arr;
    },

    concat : function(arr1, arr2) {
        return arr1.concat(arr2);
    },

    insert : function(arr, item, index) {
        var tail = arr.splice(index);
        arr.push(item);
        return arr.concat(tail);
    },

    count : function(arr, item) {
        return arr.reduce(function (prev, current) {
            if (current === item){
                prev++;
            } 
            return prev;
        }, 0);
    },

    duplicates : function(arr) {
        var myarr = [];

        for (var i = 0; i < arr.length; i++) {
            var item = arr[i];
            var count = arr.reduce(function (prev, current) {
                if (current === item) {
                    prev++
                }
                return prev;
            }, 0);
            if (count > 1 && myarr.indexOf(item) === -1) {
                myarr.push(item);
            }
        }

        return myarr;
    },

    square : function(arr) {
        return arr.map(function (item) {
            return Math.pow(item, 2);
        });
    },

    findAllOccurrences : function(arr, target) {
        return arr.map(function (item, index) {
            return (item === target ? index : undefined);
        }).filter(function (item) {
            return typeof item !== 'undefined';
        });
    }
  };
});
