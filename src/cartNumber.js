/**
 * Handle large number, such as play count or favorite count or commit count, in the card
 *
 * @param {numer} count
 * @param {number} toFixed
 * @returns {number} Return the finnal number with unit
 * @example
 *
 * cartNumber(100000)
 * // => "10.0万"
 */
 const formatHandle =
     (number, level, fixed, suffix) => {
         let temp = (number / level).toFixed(fixed);
         return temp + suffix;
     }

const cartNumber =
    (count, toFixed = 1) => {
        if(typeof count !== 'number') {
            return;
        }

        let result;
        if(count < 10000) {
            result = count;
        }
        if(count >= 10000 && count < 1e8) {
            result = formatHandle(count, 1e4, toFixed, '万');
        }
        if(count >= 1e8) {
            result = formatHandle(count, 1e8, toFixed, '亿');
        }
        return result;
    }

export default cartNumber
