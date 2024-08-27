/**
 * 给你一个整数数组 nums 和一个整数 k ，请你统计并返回 该数组中和为 k 的子数组的个数 。
 * 子数组是数组中元素的连续非空序列。
 */
/**
 *
 *可以使用前缀和和哈希表的组合方法来高效解决这个问题。前缀和是指数组中从第一个元素到当前元素的累加和。利用前缀和和哈希表，我们可以在 O(n) 时间复杂度内完成计算。
 *具体思路如下：
 *使用一个哈希表来存储前缀和出现的次数。
 *遍历数组，计算当前的前缀和，并通过前缀和判断是否存在符合条件的子数组。
 *如果当前的前缀和减去 k 在哈希表中出现过，说明存在一个或多个子数组的和为 k。
 *更新哈希表中前缀和的出现次数。
 */
/**
 * 解释
 * 初始化:
 * prefixSumCounts 哈希表用于记录前缀和出现的次数。初始化为 {0: 1} 表示前缀和为 0 的情况出现过一次。
 * currentSum 记录当前的前缀和。
 * count 记录和为 k 的子数组的个数。
 * 遍历数组:
 * 对于数组中的每个元素 num，累加到 currentSum。
 * 检查 currentSum - k 是否在 prefixSumCounts 中出现过。如果出现过，说明存在以当前元素为结尾的子数组，其和为 k，则将出现次数累加到 count。
 * 更新 prefixSumCounts 中当前前缀和 currentSum 的出现次数。
 * 返回结果:

 * 最终返回 count，即和为 k 的子数组的个数。
 * 这种方法利用了前缀和和哈希表的特性，将问题转化为查找前缀和的出现次数，极大地提高了效率，时间复杂度为 O(n)。
 */
function subarraySum(nums, k) {
  const prefixSumCounts = new Map()
  prefixSumCounts.set(0, 1)

  let currentSum = 0
  let count = 0

  for (let num of nums) {
    console.log('num', num)
    currentSum += num
    console.log('currentSum', currentSum)

    if (prefixSumCounts.has(currentSum - k)) {
      count += prefixSumCounts.get(currentSum - k)
      console.log('count', count)
    }

    if (prefixSumCounts.has(currentSum)) {
      prefixSumCounts.set(currentSum, prefixSumCounts.get(currentSum) + 1)
    } else {
      prefixSumCounts.set(currentSum, 1)
    }
    console.log('prefixSumCounts', prefixSumCounts)
  }

  return count
}

// 示例用法
const nums = [1, 2, 3, 0, 0, 2, 1]
const k = 5
console.log(subarraySum(nums, k))
