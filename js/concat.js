/**
 * @param array {Array} 需要连接的数组
 * @param values {Array} 后需要连接的数组
 * @returns {Array} 返回连接后的数组
 */

function concat(array, ...values) {
    let result = [];
    result.push(...array)
    for (const value of values) {
        result.push(value)
    }
    return result
}

export default concat;