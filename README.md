# lodash

## Array

### chunk

> 将数组（array）拆分成多个 size 长度的区块，并将这些区块组成一个新数组。 如果array 无法被分割成全部等长的区块，那么最后剩余的元素将组成一个区块。
#### 参数
1. array：需要处理的数组
2. size：每个段的长度
#### 返回值
array：处理后的数组(二维数组)
#### 示例
```js
_.chunk(['a', 'b', 'c', 'd'], 2);
// => [['a', 'b'], ['c', 'd']]
 
_.chunk(['a', 'b', 'c', 'd'], 3);
// => [['a', 'b', 'c'], ['d']]
```
#### 源码
```js
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
```

### compact
> 创建一个新数组，包含原数组中所有的非假值元素。例如false, null,0, "", undefined, 和 NaN 都是被认为是“假值”。
#### 参数
1. array (Array): 待处理的数组
#### 返回值
(Array): 返回过滤掉假值的新数组
#### 示例
````js
_.compact([0, 1, false, 2, '', 3]);
// => [1, 2, 3]
````
#### 源码
```js
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
```
### concat(array, [values])

> 创建一个新数组，将array与任何数组 或 值连接在一起。

#### 参数
1. array (Array): 被连接的数组。
2. [values] (...*): 连接的值。
#### 返回值
(Array): 返回连接后的新数组。

#### 例子
```js
var array = [1];
var other = _.concat(array, 2, [3], [[4]]);

console.log(other);
// => [1, 2, 3, [4]]

console.log(array);
// => [1]
```