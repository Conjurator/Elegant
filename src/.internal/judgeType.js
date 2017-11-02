const judgeType = (param) => (type) => {
    let paramType = Object.prototype.toString.call(param)
    return paramType.substring(8, paramType.length - 1).toLowerCase() === type
}

export default judgeType
