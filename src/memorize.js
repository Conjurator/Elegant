/**
 * a memorize function can memorize the result of function. if the function run
 * and find the value exist, it will return the cache value at once
 *
 * @param {function} fn the function will be memorized
 * @returns {function} Return the memorize function
 * @example
 *
 */

const memorize =
fn => {
        var cache = {}
        return (...args) => {
               const key = args.join("-");
               if(cache.hasOwnProperty(key)) {
                   return cache[key];
               }
               return cache[key] = fn(...args);
        }
    }

export default memorize
