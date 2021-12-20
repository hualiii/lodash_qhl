/**
 *@param {Array} 要检查的数组
 *@param {Array} 要过滤的数组
 *@returns {Array} 过滤后的数组
 */
function difference_qhl(array, values) {
  for (let i = 0; i < values.length; i++) {
    while (array.indexOf(values[i]) != -1) {
      array.splice(array.indexOf(values[i]), 1);
    }
  }
  return array;
}

export default difference_qhl;
