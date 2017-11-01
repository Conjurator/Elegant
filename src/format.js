const getTime = (date, format, isMonth) => {
    console.log(format + ':' + isMonth)
    switch(format) {
        case 'y':
            return date.getFullYear()
            break
        case 'm':
            return isMonth ? +date.getMonth() + 1 : date.getMinutes()
            break
        case 'd':
            return date.getDate()
            break
        case 'h':
            return date.getHours()
            break
        case 's':
            return date.getSeconds()
            break
        default:
            return ''
    }
} 

const formatDate = (time, format = 'yyyy-mm-dd') => {
    if(!time){
        return '';
    }
    let date = new Date(time)
    let extractReg = /([a-z]{1,}(.{1}))(?=\w)/g
    let formats = []
    let separators = []
    let formatedDate = ''

    format = format.trim().toLowerCase().replace(extractReg, (match, result, separator) => {
        formats.push(result.replace(separator, ''))
        separators.push(separator)
        return result = ''
    })
    formats.push(format)
    formats.forEach((val, index) => {
        let isMonth = true
        if (!(val.indexOf('m') < 0)) {
            if (formats.length - 1 === index) {
                isMonth = !(formats[index - 1].indexOf('y') < 0)
            } else {
                isMonth = formats[index + 1].indexOf('s') < 0
            }
        }
        let currentTime = getTime(date, val.substring(0, 1), isMonth)
        if (currentTime < 10  && val.length === 2) {
            currentTime = '0' + currentTime
        }
        
        if (index !== formats.length - 1) {
            formatedDate += currentTime + separators[index]
        } else {
            formatedDate += currentTime
        }
    })

    return formatedDate
}

export default formatDate
