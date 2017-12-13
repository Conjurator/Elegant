const encryptPhone = (phone) => {
    if (/^1\d{10}$/.test(phone)) {
        return phone.replace(/^\d{3}(\d{4})\d{4}/, (match, replacePart) => {
            return match.replace(replacePart, '****')
        })
    } else {
        return phone
    }
}

export default encryptPhone
