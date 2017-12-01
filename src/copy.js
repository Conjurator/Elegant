import judgeType from './.internal/judgeType'

const find = (list, fn) => list.filter(fn)[0]

const copy = (source, deep = false, cache = []) => {
    let sourceType = judgeType(source)
    if (!sourceType('array') && !sourceType('object')) {
        return source
    }

    let copySource = sourceType('array') ? [] : {}
    for (let prop in source) {
        let sourcePropType = judgeType(source[prop])
        if (deep && (sourcePropType('array') || sourcePropType('object'))) {
            let hit = find(cache, val => val.origin === source)
            if (hit) {
                copySource[prop] = hit.copy
                return
            }
            cache.push({
                origin: source[prop],
                copy: copySource
            })
            copySource[prop] = copy(source[prop], true, cache)
        } else {
            copySource[prop] = source[prop]
        }
    }

    return copySource
}

export default copy
