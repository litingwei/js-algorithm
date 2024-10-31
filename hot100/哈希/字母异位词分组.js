/**
 * 给定一个字符串数组，将字母异位词分组。字母异位词指字母相同，但排列不同的字符串。
 * @param {*} strs
 * @returns
 */
// 我来帮你实现一个用JavaScript解决字母异位词分组的函数。

/**
 * @param {string[]} strs
 * @return {string[][]}
 */
function groupAnagrams(strs) {
  // 创建一个Map来存储排序后的字符串和原始字符串的映射
  const map = new Map()

  // 遍历每个字符串
  for (const str of strs) {
    // 将字符串排序以获得唯一的key
    const sortedStr = str.split('').sort().join('')

    // 如果Map中已存在这个key，则将当前字符串添加到对应的数组中
    // 如果不存在，则创建一个新数组
    if (map.has(sortedStr)) {
      map.get(sortedStr).push(str)
    } else {
      map.set(sortedStr, [str])
    }
  }

  // 返回Map中所有的值（即分组后的字符串数组）
  return Array.from(map.values())
}

// 测试用例
console.log(groupAnagrams(['eat', 'tea', 'tan', 'ate', 'nat', 'bat']))
// 输出: [["eat","tea","ate"],["tan","nat"],["bat"]]

console.log(groupAnagrams(['']))
// 输出: [[""]]

console.log(groupAnagrams(['a']))
// 输出: [["a"]]

/** 
这个实现的主要思路是：

1. 使用Map数据结构来存储分组结果
2. 对于每个输入字符串：
   - 将其字符排序，得到一个排序后的字符串作为key
   - 使用这个key在Map中查找对应的组
   - 如果找到，就将原始字符串加入该组
   - 如果没找到，就创建一个新组
3. 最后返回所有分组的数组

算法的时间复杂度是O(n * k * log k)，其中n是字符串数组的长度，k是字符串的最大长度。

这个实现可以处理以下几种情况：
- 包含多个字母异位词的情况
- 只有一个字符串的情况
- 空字符串的情况

需要注意的是：
- 空字符串会被当作一个特殊情况处理
- 输出的每个子数组中包含的是原始字符串，而不是排序后的字符串
- 分组的顺序可以是任意的
*/
