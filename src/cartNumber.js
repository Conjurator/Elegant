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
         while (temp[temp.length - 1] === '0' || temp[temp.length - 1] === '.') {
            temp = temp.slice(0, -1)
         }
         return temp + suffix;
     }

const cartNumber =
    (count, toFixed = 1) => {
        if(typeof count !== 'number' || count <= 0) {
            return 0;
        }

        let result;
        if (count < 10000) {
            result = count;
        } else if (count >= 10000 && count < 1e8) {
            result = formatHandle(count, 1e4, toFixed, '万');
        } else {
            result = formatHandle(count, 1e8, toFixed, '亿');
        }

        return result;
    }

export default cartNumber
