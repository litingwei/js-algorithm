/**
 * 给你一个整数数组 nums ，判断是否存在三元组 [nums[i], nums[j], nums[k]] 满足 i != j、i != k 且 j != k ，
 * 同时还满足 nums[i] + nums[j] + nums[k] == 0 。请你返回所有和为 0 且不重复的三元组。
 * @param  nums
 * @returns
 */

/**
 * 
 * 要找到数组中的所有不重复的三元组，使得它们的和为零，我们可以使用双指针的方法。具体步骤如下：
 * 先对数组进行排序。
 * 遍历数组，用当前元素作为第一个元素，然后在剩余的元素中使用双指针寻找另外两个元素，使它们的和为零。
 * 为了避免重复的三元组，跳过重复的元素。

 */
/**
 * 解释：

 * 排序数组：先对数组进行排序，以便于后续使用双指针。
 * 遍历数组：遍历数组，每次选择一个元素作为第一个元素。对于每个选定的第一个元素，使用双指针方法在剩余的元素中寻找和为零的另外两个元素。
 * 双指针法：初始化两个指针，一个指向当前元素之后的第一个位置 (left)，另一个指向数组的末尾 (right)。计算这三个元素的和。
移动指针：
 * 如果和为零，记录这个三元组，同时移动 left 和 right 指针，跳过重复的元素。
 * 如果和小于零，移动 left 指针以增大和。
 * 如果和大于零，移动 right 指针以减小和。
 * 避免重复：为了避免重复的三元组，跳过连续相同的元素。
 * 这种方法确保了所有的三元组都是唯一的，并且时间复杂度为 O(n^2)，因为排序的时间复杂度是 O(n log n)，遍历和双指针查找的时间复杂度是 O(n^2)。
 */
function threeSum(nums) {
  const results = []
  //  升序
  nums.sort((a, b) => a - b)

  for (let i = 0; i < nums.length - 2; i++) {
    // 跳过重复元素
    if (i > 0 && nums[i] === nums[i - 1]) continue

    let left = i + 1
    let right = nums.length - 1

    while (left < right) {
      const sum = nums[i] + nums[left] + nums[right]

      if (sum === 0) {
        results.push([nums[i], nums[left], nums[right]])

        // 跳过重复元素
        while (left < right && nums[left] === nums[left + 1]) left++
        while (left < right && nums[right] === nums[right - 1]) right--

        left++
        right--
      } else if (sum < 0) {
        left++
      } else {
        right--
      }
    }
  }

  return results
}

// 示例用法
const nums = [-1, 0, 1, 2, -1, -4]
const result = threeSum(nums)
console.log(result) // 输出: [[-1, -1, 2], [-1, 0, 1]]
