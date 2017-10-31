/**
 * Produce a number
 *
 * @param {numer} min
 * @param {number} max
 * @returns {number} random number between min and max
 * @example
 *
 * random(100, 1000)
 * // =>200
 */
 //@todo swap function need to move into .internal
const swap =
    (lower, upper) => {
        const temp = lower;
        lower = upper;
        upper = temp;
        return [lower, upper];
    }
const random =
    (min, max) => {
        if(min > max) {
            [min, max] = swap(min, max)
        }
        return Math.round(Math.random() * (max - min)) + min;
    }
