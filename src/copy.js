import judgeType from './.internal/judgeType'
import errorHandler from './.internal/errorHandler'

let recursionCount = 0

const copy = (source, deep = false) => {
    let sourceType = judgeType(source)
    if (!sourceType('array') && !sourceType('object')) {
        return errorHandler('source must be an object or an array')
    }

    let copySource = sourceType('array') ? [] : {}
    for (let prop in source) {
        let sourcePropType = judgeType(source[prop])
        if (recursionCount < 5 && deep && (sourcePropType('array') || sourcePropType('object'))) {
            recursionCount++
            copySource[prop] = copy(source[prop], true)
        } else {
            copySource[prop] = source[prop]
        }
    }

    return copySource
}

export default copy
