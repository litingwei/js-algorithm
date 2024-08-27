/**
 * 给你一个整数数组 nums，返回 数组 answer ，其中 answer[i] 等于 nums 中除 nums[i] 之外其余各元素的乘积 。
 * 题目数据 保证 数组 nums之中任意元素的全部前缀元素和后缀的乘积都在  32 位 整数范围内。
 * 请 不要使用除法，且在 O(n) 时间复杂度内完成此题。
 */
/**
要解决这个问题并且保证时间复杂度为 O(n)，我们可以使用前缀积和后缀积的方式来实现。具体步骤如下：

初始化两个数组：prefix 和 suffix。

prefix[i] 表示数组 nums 中 nums[i] 之前所有元素的乘积。
suffix[i] 表示数组 nums 中 nums[i] 之后所有元素的乘积。
计算前缀积：

从左到右遍历数组，计算每个元素的前缀积。
计算后缀积：

从右到左遍历数组，计算每个元素的后缀积。
计算结果数组：

结果数组的每个元素等于对应位置的前缀积和后缀积的乘积。
 */
/**
 解释
 优化后的代码
前缀积计算:

直接在结果数组中存储前缀积。
result[i] 保存 nums[0] 到 nums[i-1] 的乘积。
后缀积计算:

计算后缀积的同时，更新结果数组。
result[i] 最终保存 nums[0] 到 nums[i-1] 的乘积乘以 nums[i+1] 到 nums[n-1] 的乘积。
通过这种方法，空间复杂度优化为 O(1)（除了结果数组外），依然保持时间复杂度为 O(n)。
 */
function productExceptSelf(nums) {
  const n = nums.length
  const prefix = new Array(n).fill(1)
  const suffix = new Array(n).fill(1)
  const result = new Array(n)

  // 计算前缀积
  for (let i = 1; i < n; i++) {
    prefix[i] = prefix[i - 1] * nums[i - 1]
  }
  console.log(prefix)

  // 计算后缀积
  for (let i = n - 2; i >= 0; i--) {
    suffix[i] = suffix[i + 1] * nums[i + 1]
  }
  console.log(suffix)

  // 计算结果数组
  for (let i = 0; i < n; i++) {
    result[i] = prefix[i] * suffix[i]
  }

  return result
}

// 示例用法
const nums = [1, 2, 3, 4]
console.log(productExceptSelf(nums)) // 输出: [24, 12, 8, 6]
