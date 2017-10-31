/**
 * a compose function and the input arguments are function
 *
 * @param {fns} list
 * @returns {function} Return a compose function
 * @example
 *
 * compose(f1, f2, f3)(arg)
 * // => f1(f2(f3(arg)))
 */
const compose =
    (...fns) =>
        arg => {
            let list = fns.slice();
            while(list.length > 0) {
                arg = list.pop()(arg);
            }
            return arg;
        }

export default compose
