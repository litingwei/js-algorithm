/**
 * 给定一个未排序的整数数组 nums ，找出数字连续的最长序列（不要求序列元素在原数组中连续）的长度。
 * @param {*} nums
 * @returns
 */
// 我来帮你实现一个时间复杂度为 O(n) 的算法来解决最长连续序列问题。

/**
 * @param {number[]} nums
 * @return {number}
 */
function longestConsecutive(nums) {
  // 如果数组为空，直接返回0
  if (nums.length === 0) return 0

  // 创建一个Set来存储数组中的所有数字，用于O(1)时间的查找
  const numSet = new Set(nums)
  let maxLength = 0

  // 遍历数组中的每个数字
  for (const num of numSet) {
    // 只有当num-1不存在时，才开始计算序列
    // 这确保了我们只从序列的起始数字开始计算
    if (!numSet.has(num - 1)) {
      let currentNum = num
      let currentLength = 1

      // 继续查找后续的连续数字
      while (numSet.has(currentNum + 1)) {
        currentNum++
        currentLength++
      }

      // 更新最长序列长度
      maxLength = Math.max(maxLength, currentLength)
    }
  }

  return maxLength
}

// 测试用例
console.log(longestConsecutive([100, 4, 200, 1, 3, 2]))
// 输出: 4
// 解释: 最长数字连续序列是 [1, 2, 3, 4]。它的长度是 4。

console.log(longestConsecutive([0, 3, 7, 2, 5, 8, 4, 6, 0, 1]))
// 输出: 9
// 解释: 最长数字连续序列是 [0,1,2,3,4,5,6,7,8]。它的长度是 9。

console.log(longestConsecutive([]))
// 输出: 0

console.log(longestConsecutive([1]))
// 输出: 1

console.log(longestConsecutive([1, 2, 0, 1]))
// 输出: 3
/** 

这个算法的核心思路是：

1. 使用Set数据结构存储所有数字，使得查找操作的时间复杂度为O(1)

2. 对于每个数字num，我们只在num是序列起点时才开始计算（即num-1不存在于集合中）。这个优化很关键，确保了我们不会重复计算序列长度

3. 从每个序列的起点开始，不断查找下一个连续的数字，直到找不到为止

4. 维护一个最大长度变量，记录已找到的最长连续序列的长度

算法的时间复杂度分析：
- 创建Set的时间复杂度：O(n)
- 遍历数组：O(n)
- 对于每个数字，while循环最多执行n次（所有数字加起来）
- 所以总的时间复杂度是O(n)

算法的空间复杂度：
- 需要一个Set来存储所有数字
- 空间复杂度为O(n)

这个实现可以处理以下情况：
- 普通的连续序列
- 空数组
- 只有一个元素的数组
- 有重复元素的数组
- 无序的数组

关键的优化点是只从序列的起始点开始计算，这避免了重复计算，使得算法能够达到O(n)的时间复杂度。

需要我解释算法的某个具体部分，或者你想了解其他优化方案吗？
*/
