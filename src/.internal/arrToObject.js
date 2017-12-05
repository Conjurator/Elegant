import judgeType from './judgeType'

const arrToObject = (arr) => {
    if (!judgeType(arr)('array')) {
        return {}
    }

    let obj = {}

    arr.forEach(val => {
        if (!obj.hasOwnProperty(val)) {
            obj[val]= val
        }
    })

    return obj
}

export default arrToObject
