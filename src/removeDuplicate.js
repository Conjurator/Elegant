import judgeType from './.internal/judgeType'
import arrToObject from './.internal/arrToObject'

const duplicateItemsStrict = arr =>
    arr.filter((val, index) =>
        arr.indexOf(val) !== index)

const duplicateItemsNonStrict = arr =>
    arr.filter((val, idx) =>
        arr.some((value, index) =>
                (val !== value && val == value) || (val === value && idx !== index)))

const keepOneDuplicateStrict = arr =>
    arr.filter((val, index) =>
        arr.indexOf(val) === index)

const keepNoneDuplicateStrict = arr =>
    arr.filter(val =>
        duplicateItemsStrict(arr).indexOf(val) < 0)

const keepNoneDuplicateNonStrict = arr =>
    arr.filter(val =>
        duplicateItemsNonStrict(arr).indexOf(val) < 0)

const keepOneDuplicateNonStrict = arr =>
    Object.keys(arrToObject(arr))

const removeDuplicates = (arr = [], { deleteAll, strict } = { deleteAll: false, strict: true}) => {
    if (!judgeType(arr)('array') || !arr.length) {
        return []
    }

    let arrLen = arr.length

    if (deleteAll) {
        return strict ? keepNoneDuplicateStrict(arr) : keepNoneDuplicateNonStrict(arr)
    } else {
        if (strict) {
            return keepOneDuplicateStrict(arr)
        } else {
            return keepOneDuplicateNonStrict(arr)
        }
    }
}

export default removeDuplicates
