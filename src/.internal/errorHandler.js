const errorHandler = (message = '') => {
    let error = new Error(message)
    if (process.env.NODE_ENV === 'TEST') {
        return error
    } else {
        throw error
        return
    }
}

export default errorHandler
