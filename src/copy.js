/**
 * copy JSON
 *
 * @param {fns} Objcet
 * @returns {Object} Return a new copy
 * @example copy(myObject,true)
 *  => (Object)obj
 *
 */
import judgeType from './.internal/judgeType'

const find = (list, fn) => list.filter(fn)[0]

const copy = (source, deep = false, cache = []) => {
    let sourceType = judgeType(source)

    if (!sourceType('array') && !sourceType('object')) {
        return source
    }

    //test if recursive reference exist,marked as "hit"
    let hit = find(cache, val => val.origin === source)
    if (hit) {
        return hit.copy
    }

    let copySource = sourceType('array') ? [] : {}
    Object.keys(source).forEach(prop => {
        if (deep && (sourceType('array') || sourceType('object'))) {
            cache.push({
                origin: source,
                copy: copySource
            })
            copySource[prop] = copy(source[prop], true, cache)
        } else {
            copySource[prop] = source[prop]
        }
    })

    return copySource
}

export default copy
