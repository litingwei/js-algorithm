/**
 * 
给你一个整数数组 nums ，请你找出一个具有最大和的连续子数组（子数组最少包含一个元素），返回其最大和。
子数组是数组中的一个连续部分。
 */
// 这是经典的最大子数组和问题，我们可以使用动态规划或者Kadane算法来解决。我来实现一个清晰高效的解决方案。

/**
 * @param {number[]} nums - 输入的整数数组
 * @return {number} - 最大子数组和
 */
function maxSubArray(nums) {
  // 如果数组为空，返回0
  if (nums.length === 0) return 0

  // 如果数组只有一个元素，直接返回该元素
  if (nums.length === 1) return nums[0]

  // 记录当前位置的最大子数组和
  let currentSum = nums[0]
  // 记录全局最大子数组和
  let maxSum = nums[0]

  // 从第二个元素开始遍历
  for (let i = 1; i < nums.length; i++) {
    // 在每个位置，我们有两个选择：
    // 1. 将当前元素加入到之前的子数组中
    // 2. 从当前元素开始新的子数组
    currentSum = Math.max(nums[i], currentSum + nums[i])

    // 更新全局最大和
    maxSum = Math.max(maxSum, currentSum)
  }

  return maxSum
}

// 辅助函数：打印子数组的详细信息（用于理解算法过程）
function printMaxSubArray(nums) {
  if (nums.length === 0) return

  let currentSum = nums[0]
  let maxSum = nums[0]
  let start = 0
  let tempStart = 0
  let end = 0

  for (let i = 1; i < nums.length; i++) {
    if (nums[i] > currentSum + nums[i]) {
      currentSum = nums[i]
      tempStart = i
    } else {
      currentSum = currentSum + nums[i]
    }

    if (currentSum > maxSum) {
      maxSum = currentSum
      start = tempStart
      end = i
    }
  }

  console.log(`输入数组: [${nums.join(', ')}]`)
  console.log(`最大子数组: [${nums.slice(start, end + 1).join(', ')}]`)
  console.log(`最大和: ${maxSum}`)
  console.log(`子数组起始索引: ${start}`)
  console.log(`子数组结束索引: ${end}`)
  console.log('---')
}

// 测试用例
console.log(maxSubArray([-2, 1, -3, 4, -1, 2, 1, -5, 4])) // 输出: 6
console.log(maxSubArray([1])) // 输出: 1
console.log(maxSubArray([5, 4, -1, 7, 8])) // 输出: 23
console.log(maxSubArray([-1])) // 输出: -1
console.log(maxSubArray([-2, -1])) // 输出: -1

// 打印详细信息的测试用例
printMaxSubArray([-2, 1, -3, 4, -1, 2, 1, -5, 4])
printMaxSubArray([5, 4, -1, 7, 8])
printMaxSubArray([-2, -1])

/**
 * 这个解决方案使用了Kadane算法，其主要思路是：
 *
1. 核心思想：
   - 在每个位置，我们都面临一个选择：
     - 将当前元素加入到现有的子数组中
     - 从当前元素开始一个新的子数组

2. 算法步骤：
   - 维护两个变量：
     - currentSum：表示包含当前元素的最大子数组和
     - maxSum：表示全局最大子数组和
   - 对于每个元素，更新currentSum为：
     - 当前元素值
     - 或者当前元素值加上之前的currentSum
     中的较大值
   - 同时更新全局maxSum

3. 复杂度分析：
   - 时间复杂度：O(n)，只需要遍历一次数组
   - 空间复杂度：O(1)，只使用了常数级别的额外空间

4. 特殊情况处理：
   - 空数组
   - 只有一个元素的数组
   - 全是负数的数组
   - 没有负数的数组

5. 额外功能：
   - 提供了printMaxSubArray辅助函数，用于显示：
     - 最大子数组的具体内容
     - 子数组的起始和结束位置
     - 最大和
   这有助于理解算法的工作过程

对于输入数组 [-2,1,-3,4,-1,2,1,-5,4]：
- 最大子数组是 [4,-1,2,1]
- 最大和是 6
- 子数组的位置是从索引3到6

如果你想看到更多测试用例或需要理解算法的具体步骤，我可以添加更多示例或详细解释每步的计算过程。
*/
