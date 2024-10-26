/**
 * 
给你一个整数数组 nums ，请你找出一个具有最大和的连续子数组（子数组最少包含一个元素），返回其最大和。
子数组是数组中的一个连续部分。
 */
/**
 * 
为了找到具有最大和的连续子数组，我们可以使用著名的 Kadane 算法。该算法的时间复杂度为 O(n)，非常高效。Kadane 算法的核心思想是动态规划，通过遍历数组，维护一个当前子数组的最大和 current_sum，以及全局最大和 max_sum。

*/
// dp[i] 表示以 nums[i] 结尾的最大子数组和
function maxSubArray(nums) {
  if (nums.length === 0) return 0

  let maxSum = nums[0]
  let dp = [nums[0]]

  for (let i = 1; i < nums.length; i++) {
    dp[i] = Math.max(dp[i - 1] + nums[i], nums[i])
    maxSum = Math.max(maxSum, dp[i])
  }

  return maxSum
}

// 示例用法
const nums = [-2, 1, -3, 4, -1, 2, 1, -5, 4]
console.log(maxSubArray(nums)) // 输出: 6
