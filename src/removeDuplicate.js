import judgeType from './.internal/judgeType'
import errorHandler from './.internal/errorHandler'

const removeDuplicates = (arr = [], { deleteAll, strict } = { deleteAll: false, strict: false }) => {
    if (!judgeType(arr)('array')) {
        return errorHandler('arr must be an array')
    }
    let arrLen = arr.length
    if (!arrLen) {
        return []
    }

    if (deleteAll) {
        if (strict) {
            let newArr = []
            for (let i = arrLen; i >= 0; i--) {
                if (arr.indexOf(arr[i]) !== i) {
                    newArr.push(arr[i])
                }
            }

            return newArr
        } else {
            let obj = {}
            let newArr = []
            for (let i = 0; i < arrLen; i++) {
                if (obj.hasOwnProperty(arr[i])) {
                    obj[arr[i]] = [].concat(obj[arr[i]], arr[i])
                } else {
                    obj[arr[i]] = arr[i]
                }
            }
            for (let prop in obj) {
                if (!judgeType(obj[prop])('array')) {
                    newArr.push(prop)
                }
            }

            return newArr
        }
    } else {
        if (strict) {
            return Array.from(new Set(arr))
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
