import judgeType from './.internal/judgeType'
import errorHandler from './.internal/errorHandler'

const keepOneDuplicateStrict = arr =>
    arr.filter((val, index) =>
        arr.indexOf(val) === index)

const keepNoneDuplicateStrict = arr =>
    arr.filter(val =>
        duplicateItemsStrict(arr).indexOf(val) < 0)

const keepNoneDuplicateNonStrict = arr =>
    arr.filter(val =>
        duplicateItemsNonStrict(arr).indexOf(val) < 0)

const duplicateItemsStrict = arr =>
    arr.filter((val, index) =>
        arr.indexOf(val) !== index)

const duplicateItemsNonStrict = arr =>
    arr.filter((val, idx) =>
        arr.some((value, index) =>
                (val !== value && val == value) || (val === value && idx !== index)))

// const keepOneDuplicateNonStrict = arr =>
//     keepOneDuplicateStrict(arr)

const removeDuplicates = (arr = [], { deleteAll, strict } = { deleteAll: false, strict: true}) => {
    if (!judgeType(arr)('array')) {
        return errorHandler('arr must be an array')
    }
    let arrLen = arr.length
    if (!arrLen) {
        return []
    }

    if (deleteAll) {
        return strict ? keepNoneDuplicateStrict(arr) : keepNoneDuplicateNonStrict(arr)
    } else {
        if (strict) {
            return Array.from ? Array.from(new Set(arr)) : keepOneDuplicateNonStrict(arr)
        } else {
            let obj = {}

            for (let i = 0; i < arrLen; i++) {
                if (!obj.hasOwnProperty(arr[i])) {
                    obj[arr[i]] = arr[i]
                }
            }

            return Object.keys(obj)
        }
    }
}

export default removeDuplicates
