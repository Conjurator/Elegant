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
        if (!funcContext.timeout) funcContext.timeout = setTimeout(later, wait)
        if (callNow) {
            result = func.apply(context, args)
            context = args = null
        }
        return result
    }
}

export default debounce
