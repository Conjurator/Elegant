import errorHandler from './.internal/errorHandler'

const getTime = (date, format, isMonth) => {
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
    if (typeof time === 'undefined') {
        return errorHandler('the time param must be given')
    }
    let date = new Date(time)
    if (isNaN(date.getTime())) {
        return errorHandler('the time you give is not a valid timestamp')
    }

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
        if ((val.indexOf('m') >= 0)) {
            if (formats.length - 1 === index) {
                if (index !== 0) {
                    isMonth = formats[index - 1].indexOf('y') >= 0
                }
            } else {
                isMonth = formats[index + 1] && formats[index + 1].indexOf('s') < 0
            }
        }
        let currentTime = getTime(date, val.substring(0, 1), isMonth)
        if (currentTime < 10 && val.length === 2) {
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

const formatSize = (size) => {
    let sizeKb = parseInt(size / 1024)
    let formatSize = ''
    
    if (sizeKb === 0) {
        formatSize = ''
    } else if (sizeKb > 0 && sizeKb < 1024) {
        formatSize = sizeKb + 'K'
    } else {
        formatSize = parseInt(sizeKb / 1024) + 'M'
    }

    return formatSize
}

const formatTime = (millis) => {
    let duration = Math.max(0 ,Date.now() - millis)

    if (duration < 1000) {
        return '刚刚'
    } else if (duration < 1000*60) {
        return parseInt(duration / (1000)) + '秒前'
    } else if (duration < 1000*60*60) {
        return parseInt(duration / (1000*60)) + '分钟前'
    } else if (duration < 1000*60*60*24) {
        return parseInt(duration / (1000*60*60)) + '小时前'
    } else if (duration < 1000*60*60*24*7) {
        return parseInt(duration / (1000*60*60*24)) + '天前'
    } else if (duration < 1000*60*60*24*30) {
        return parseInt(duration / (1000*60*60*24*7)) + '周前'
    } else if (duration < 1000*60*60*24*365) {
        return parseInt(duration / (1000*60*60*24*30)) + '月前'
    } else {
        return parseInt(duration/(1000*60*60*24*365)) + '年前'
    }
}

export default {
    formatDate,
    formatSize,
    formatTime
}
