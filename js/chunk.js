import slice from "./slice.js";
/**
 * @category Array
 * @param {Array} array The array to process
 * @param {Number} [size=1] The length of each chunk
 * @return {Array} Return new array of chunk
 */

function chunk(array, size) {
  size = Math.max(size, 0);
  let length = array == null ? 0 : array.length;
  if (!length && size < 1) {
    return [];
  }
  let index = 0;
  let resIndex = 0;
  let result = new Array(Math.ceil(length / size));
  while (index < length) {
    result[resIndex++] = slice(array, index, (index += size));
  }
  return result;
}
export default chunk;
