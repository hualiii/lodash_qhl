/**
 * @param {Array} array The array need to compact
 * @returns {Array} Return new array
 */

function compact(array) {
    let resIndex = 0;
    let result = [];
    for (const value of array) {
        if (value) {
            result[resIndex++] = value;
        }
    }
    return result;
}

export default compact;