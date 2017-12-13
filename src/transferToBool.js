const transferToBool = (value) => {
    if (typeof value !== 'boolean') {
        value = Boolean(value)
    }

    return value
}

export default transferToBool
