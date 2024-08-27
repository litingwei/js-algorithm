/**
 * 给定一个未排序的整数数组 nums ，找出数字连续的最长序列（不要求序列元素在原数组中连续）的长度。
 * @param {*} nums
 * @returns
 */
/**
 *
 * 要设计一个时间复杂度为 O(n) 的算法来解决这个问题，我们可以使用哈希集合 (HashSet) 来实现。具体步骤如下：
 *
 * 将所有数字存入哈希集合中，这样可以在 O(1) 时间内检查某个数字是否存在。
 * 遍历数组中的每个数字，尝试找到以该数字为起点的最长连续序列。如果该数字的前一个数字不在集合中，那么它是一个新的序列的起点。
 * 从当前数字开始，向后检查每一个连续的数字是否存在于集合中，并记录序列的长度。
 * 更新最长序列的长度。
 */
/**
 *
 * 解释：
 *
 * 将所有数字存入哈希集合中，使得检查某个数字是否存在的时间复杂度为 O(1)。
 * 遍历哈希集合中的每个数字，检查当前数字是否是一个序列的起点（即其前一个数字不在集合中）。
 * 如果是一个序列的起点，则继续检查下一个连续的数字是否存在，并记录当前序列的长度。
 * 更新最长连续序列的长度。
 * 最终返回最长连续序列的长度。
 * 这种方法保证了每个数字只会被检查一次，因此总的时间复杂度为 O(n)。
 */
function longestConsecutive(nums) {
  if (nums.length === 0) return 0
  // 将所有数字存入哈希集合中
  const numSet = new Set(nums)
  let longestStreak = 0
  console.log(numSet)
  for (let num of numSet) {
    // 检查当前数字是否是一个序列的起点
    if (!numSet.has(num - 1)) {
      let currentNum = num
      console.log('currentNum', currentNum)
      let currentStreak = 1

      // 向后检查每一个连续的数字是否存在于集合中
      while (numSet.has(currentNum + 1)) {
        currentNum += 1
        currentStreak += 1
      }

      // 更新最长序列的长度
      longestStreak = Math.max(longestStreak, currentStreak)
    }
  }

  return longestStreak
}

// 示例用法
const nums = [100, 4, 200, 1, 3, 2]
const longestSequenceLength = longestConsecutive(nums)
console.log(longestSequenceLength)
