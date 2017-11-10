/**
 * a strict curried function accept arguments one by one,every argument can return
 × a function which accept next argument
 *
 * @param {function} fn the function will be curried
 * @param {number} arity argument length
 * @returns {function} Return the curried function, which accept one argument
 * @example
 *
 * fn(arg1, arg2, arg3)
 * // => curry(fn)(arg1)(arg2)(arg3)
 */

const curry =
    (fn, arity = fn.length, nextCurried) =>
        (nextCurried = prevArgs =>
            nextArg => {
                let args = prevArgs.concat([nextArg]);
                if(args.length >= arity) {
                    return fn(...args);
                } else {
                    return nextCurried(args);
                }
            }
        )([]);

export default curry
