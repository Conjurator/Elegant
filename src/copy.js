import judgeType from './.internal/judgeType'

const find = (list, fn) => list.filter(fn)[0]

const copy = (source, deep = false, cache = []) => {
    let sourceType = judgeType(source)
    if (!sourceType('array') && !sourceType('object')) {
        return source
    }

    let copySource = sourceType('array') ? [] : {}
    Object.keys(source).forEach(prop => {
        if (deep && (sourceType('array') || sourceType('object'))) {
            let hit = find(cache, val => val.origin === source)
            if (hit) {
                copySource[prop] = hit.copy
                return
            }
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
