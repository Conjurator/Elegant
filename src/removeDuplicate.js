import judgeType from './.internal/judgeType'
import errorHandler from './.internal/errorHandler'

const simpleUnique = arr => arr.filter((val, index) => arr.indexOf(val) === index)

const duplicateItem = arr => arr.filter((val, index) => arr.indexOf(val) !== index)

const complexUnique = arr => arr.filter(val => duplicateItem(arr).indexOf(val) < 0)

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
            return complexUnique(arr)
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
            return Array.from ? Array.from(new Set(arr)) : simpleUnique(arr)
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
