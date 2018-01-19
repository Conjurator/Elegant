/**
 * a strict curried function accept arguments one by one,every argument can return
 × a function which accept next argument
 *
 * @param {function} fn the function will be called
 * @param {number} 
 * @param {boolean} excute function imediately
 * @param {object} function running context
 * @returns {function} Return the curried function, which accept one argument
 * @example {}
 *
 * fn(arg1, arg2, arg3, arg4)
 * // => fn(func,400,true,this);
 */
const debounce = function (func, wait, immediate, funcContext) {
    var args, context, timestamp, result

    var later = function () {
        var nowTime = new Date().getTime()
        var last = nowTime - timestamp
        if (last < wait && last >= 0) {
            funcContext.timeout = setTimeout(later, wait - last)
        } else {
            funcContext.timeout = null
            if (!immediate) {
                result = func.apply(context, args)
                context = args = null
                return result
            }
        }
    }
    return function () {
        context = funcContext
        args = arguments
        timestamp = new Date().getTime()
        var callNow = immediate && !funcContext.timeout
        //如果没有设置timeout，则在context上加timeout，同时timeout记录为timeoutID
        if (!funcContext.timeout) funcContext.timeout = setTimeout(later, wait)
        //在timeout为空，而且immediate的情况下，立即执行。
        if (callNow) {
            result = func.apply(context, args)
            context = args = null
        }
        return result
    }
}

export default debounce
