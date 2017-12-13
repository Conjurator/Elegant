const OneEightyOverPi = 57.29577957855

const isOrientation = (posX, posY, posZ) => {
    let magnitude = posX * posX + posY * posY
    let orientation
    if (magnitude * 4 >= posZ * posZ) {
        let angle = Math.atan2(-posY, posX) * OneEightyOverPi
        orientation = 90 - Math.round(angle)
        if (orientation >= 360) {
            orientation -= 360
        }
        if (orientation < 0) {
            orientation += 360
        }
    }

    let result = (orientation > 45 && orientation <= 135) || (orientation > 225 && orientation <= 315)

    return !result
}

export default isOrientation
