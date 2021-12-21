import slice from "./slice"
/**
 * @param {Array} array 要查询的数组。
 * @param {Number} [n=1] 要去除的元素个数。
 * @returns {Array} 返回array剩余切片。
 */
/**
自己的思路
function drop(array, n = 1) {
  let result = []
  let resIndex = 0
  if (array.length < n) {
    return []
  }
  for (let i = n; i < array.length; i++) {
    result[resIndex++] = array[i]
  }
  return result
}
 */

function drop(array, n = 1) {
  let length = array == null ? 0 : array.length
  return length ? slice(array, n < 0 ? 0 : parseInt(n), length) : []
}
export default drop