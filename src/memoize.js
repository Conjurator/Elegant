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
    fn =>
        (...args) => {
            {
                const key = args.join("-");
                let cache;
                if(!memorize.cache) {
                    memorize.cache = {}
                }
                cache = memorize.cache;
                if(cache.hasOwnProperty(key)) {
                    return cache[key];
                }
                cache[key] = fn(...args);
                Object.assign(memorize.cache, {key: cache[key]})
                return cache[key];
            }
        }
