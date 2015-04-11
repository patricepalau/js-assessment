if (typeof define !== 'function') { var define = require('amdefine')(module); }

define(function() {
  return {
    listFiles: function listFiles(data, dirName) {
        var results = [];

        var currentDir = data.dir,
            files = data.files;

        files.forEach(function (file) {
            if (typeof file === 'string') {
                if (!dirName || dirName && dirName === currentDir) {
                    results.push(file);
                }
            }
            else {
                if (dirName && dirName === currentDir) {
                    dirName = undefined;
                }
                results = results.concat(listFiles(file, dirName));
            }
        });

        return results;
    },

    permute: function permute(arr) {
        var permutations = [];

        arr.forEach(function (item, index, array) {
            var subarr = [].concat(array);
            subarr.splice(index, 1);
            
            var allperms = permute(subarr);
            if (allperms.length == 0) {
                permutations.push([item]);
            }
            else {
                allperms.forEach(function (perm) {
                    permutations.push([item].concat(perm));
                });
            }
        });
        
        return permutations;
    },

    fibonacci: function fibonacci(n) {
        if (n === 1) {
            return 1;
        }
        else if (n === 0) {
            return 0
        }
        else {
            return fibonacci(n - 1) + fibonacci(n - 2);
        }
    },

    validParentheses: function validParentheses(n) {
        var result = [];

        if (n == 1) {
            result.push('()');
        }
        else {
            var all = validParentheses(n - 1);
            all.forEach(function (perm) {
                result.push('(' + perm + ')');
                result.push('()' + perm);
                if (result.indexOf(perm + '()') === -1) {
                    result.push(perm + '()');
                }
            });
        }

        return result;
    }
  };
});
