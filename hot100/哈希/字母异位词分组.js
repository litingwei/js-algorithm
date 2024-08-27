/**
 * 给定一个字符串数组，将字母异位词分组。字母异位词指字母相同，但排列不同的字符串。
 * @param {*} strs
 * @returns
 */
/**
 * 
 * 解释：
 * 要解决这个问题，我们可以利用字母异位词的一个特性：当两个单词是字母异位词时，它们的字符排序后得到的字符串是相同的。
 * 我们可以利用这个特性，将字符排序后的字符串作为键，将字母异位词组合在一起。

 * 创建一个空的Map，用于存储字母异位词的分组。
 * 遍历输入的字符串数组，对于每个字符串，将其字符排序后得到一个新的字符串。
 * 检查Map中是否已有这个排序后的字符串，如果没有，则创建一个新的列表。
将原始字符串加入到对应的分组中。
最后，将Map中的所有值（即字母异位词分组）转换为数组并返回。
这个解决方案的时间复杂度是O(NKlogK)，其中N是字符串数组的长度，K是字符串的最大长度。排序操作的时间复杂度是O(KlogK)，我们对每个字符串执行一次排序操作。
 */
var groupAnagrams = function (strs) {
  const map = new Map()
  for (let str of strs) {
    const sorted = str.split('').sort().join('')
    if (!map.has(sorted)) {
      map.set(sorted, [str])
    } else {
      map.get(sorted).push(str)
    }
  }
  return Array.from(map.values())
}
