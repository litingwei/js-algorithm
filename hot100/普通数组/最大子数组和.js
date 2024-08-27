/**
 * 
给你一个整数数组 nums ，请你找出一个具有最大和的连续子数组（子数组最少包含一个元素），返回其最大和。
子数组是数组中的一个连续部分。
 */
/**
 * 
为了找到具有最大和的连续子数组，我们可以使用著名的 Kadane 算法。该算法的时间复杂度为 O(n)，非常高效。Kadane 算法的核心思想是动态规划，通过遍历数组，维护一个当前子数组的最大和 current_sum，以及全局最大和 max_sum。

 * 具体步骤如下：
 * 初始化 max_sum 为数组的第一个元素。
 * 初始化 current_sum 为数组的第一个元素。
 * 从第二个元素开始遍历数组：
 * 更新 current_sum 为当前元素和 current_sum 加上当前元素中的较大值（即决定是否从当前元素重新开始一个新的子数组）。
 * 更新 max_sum 为 current_sum 和 max_sum 中的较大值。
 * 遍历结束后，max_sum 即为最大和的连续子数组的和。
 */
/**
 * 解释
 * 初始化:
 *
 * maxSum 和 currentSum 都初始化为数组的第一个元素 nums[0]。
 * 遍历数组:
 *
 * 从第二个元素开始遍历数组。
 * 更新 currentSum 为当前元素和 currentSum + 当前元素 的较大值。这一步是为了决定是否将当前元素加入当前的子数组，还是重新开始一个新的子数组。
 * 更新 maxSum 为 currentSum 和 maxSum 的较大值。这一步是为了保持全局最大和。
 * 返回结果:
 *
 * 最终返回 maxSum，即最大和的连续子数组的和。
 * 这种方法通过动态规划的思想，避免了暴力破解法的重复计算，极大地提高了效率，适用于大多数数组情况。
 */
function maxSubArray(nums) {
  if (nums.length === 0) return 0

  let maxSum = nums[0]
  let currentSum = nums[0]

  for (let i = 1; i < nums.length; i++) {
    currentSum = Math.max(nums[i], currentSum + nums[i])
    maxSum = Math.max(maxSum, currentSum)
  }

  return maxSum
}

// 示例用法
const nums = [-2, 1, -3, 4, -1, 2, 1, -5, 4]
console.log(maxSubArray(nums)) // 输出: 6
