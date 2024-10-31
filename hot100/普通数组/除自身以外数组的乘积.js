/**
 * 给你一个整数数组 nums，返回 数组 answer ，其中 answer[i] 等于 nums 中除 nums[i] 之外其余各元素的乘积 。
 * 题目数据 保证 数组 nums之中任意元素的全部前缀元素和后缀的乘积都在  32 位 整数范围内。
 * 请 不要使用除法，且在 O(n) 时间复杂度内完成此题。
 */
// 我来帮你实现这个不使用除法的数组乘积问题。这是一个经典题目，我们可以通过计算前缀乘积和后缀乘积来解决。

/**
 * @param {number[]} nums
 * @return {number[]}
 */
function productExceptSelf(nums) {
  const n = nums.length
  const answer = new Array(n)

  // 第一步：计算左侧所有数字的乘积
  // answer[i] 表示 nums[i] 左侧所有元素的乘积
  answer[0] = 1 // 最左边没有元素，所以为1
  for (let i = 1; i < n; i++) {
    answer[i] = answer[i - 1] * nums[i - 1]
  }

  // 第二步：计算右侧所有数字的乘积并与左侧乘积相乘
  let rightProduct = 1 // 记录右侧元素的乘积
  for (let i = n - 1; i >= 0; i--) {
    answer[i] = answer[i] * rightProduct
    rightProduct *= nums[i]
  }

  return answer
}

// 测试用例
console.log(productExceptSelf([1, 2, 3, 4])) // 输出: [24,12,8,6]
console.log(productExceptSelf([-1, 1, 0, -3, 3])) // 输出: [0,0,9,0,0]

/** 

这个解决方案的核心思想是：
1. 首先从左到右遍历，计算每个位置左侧所有数字的乘积
2. 然后从右到左遍历，计算每个位置右侧所有数字的乘积，并与之前计算的左侧乘积相乘

时间复杂度分析：
- 总共只需要遍历数组两次，所以时间复杂度是 O(n)
- 除了输出数组外，只使用了一个变量存储右侧乘积，所以空间复杂度是 O(1)

算法的优点：
1. 没有使用除法运算
2. 符合 O(n) 的时间复杂度要求
3. 空间利用效率高，只使用了要求的输出数组

需要我解释代码中的任何具体部分吗？
*/
