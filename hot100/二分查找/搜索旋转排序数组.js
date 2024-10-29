/**
 * 整数数组 nums 按升序排列，数组中的值 互不相同 。

在传递给函数之前，nums 在预先未知的某个下标 k（0 <= k < nums.length）上进行了 旋转，使数组变为 [nums[k], nums[k+1], ..., nums[n-1], nums[0], nums[1], ..., nums[k-1]]（下标 从 0 开始 计数）。例如， [0,1,2,4,5,6,7] 在下标 3 处经旋转后可能变为 [4,5,6,7,0,1,2] 。

给你 旋转后 的数组 nums 和一个整数 target ，如果 nums 中存在这个目标值 target ，则返回它的下标，否则返回 -1 。

你必须设计一个时间复杂度为 O(log n) 的算法解决此问题。


 */
// 我来帮你解决这个旋转排序数组的搜索问题。我们可以使用修改后的二分查找来实现 O(log n) 的时间复杂度。

/**
 * @param {number[]} nums - 旋转后的升序数组
 * @param {number} target - 要查找的目标值
 * @return {number} - 目标值的索引，不存在则返回-1
 */
function search(nums, target) {
  if (nums.length === 0) return -1

  let left = 0
  let right = nums.length - 1

  while (left <= right) {
    const mid = Math.floor((left + right) / 2)

    // 如果找到目标值，直接返回
    if (nums[mid] === target) {
      return mid
    }

    // 判断左半部分是否有序
    if (nums[left] <= nums[mid]) {
      // 左半部分有序
      if (target >= nums[left] && target < nums[mid]) {
        // target在左半部分
        right = mid - 1
      } else {
        // target在右半部分
        left = mid + 1
      }
    } else {
      // 右半部分有序
      if (target > nums[mid] && target <= nums[right]) {
        // target在右半部分
        left = mid + 1
      } else {
        // target在左半部分
        right = mid - 1
      }
    }
  }

  return -1
}

// 测试用例
console.log(search([4, 5, 6, 7, 0, 1, 2], 0)) // 输出: 4
console.log(search([4, 5, 6, 7, 0, 1, 2], 3)) // 输出: -1
console.log(search([1], 0)) // 输出: -1
console.log(search([1], 1)) // 输出: 0
console.log(search([3, 1], 1)) // 输出: 1
console.log(search([5, 1, 3], 3)) // 输出: 2
console.log(search([4, 5, 6, 7, 8, 1, 2, 3], 8)) // 输出: 4

/**
这个解决方案的主要思路是：

1. 使用二分查找，但需要特殊处理旋转数组的特点：
   - 数组被分成两部分，其中一部分一定是有序的
   - 通过比较 nums[left] 和 nums[mid] 可以判断哪部分是有序的

2. 在每次二分时：
   - 先判断中间元素是否为目标值
   - 判断左半部分是否有序（通过比较 nums[left] 和 nums[mid]）
   - 如果左半部分有序：
     - 判断目标值是否在左半部分的范围内
     - 如果在，则在左半部分继续搜索
     - 如果不在，则在右半部分继续搜索
   - 如果右半部分有序：
     - 判断目标值是否在右半部分的范围内
     - 如果在，则在右半部分继续搜索
     - 如果不在，则在左半部分继续搜索

3. 算法复杂度：
   - 时间复杂度：O(log n)，使用二分查找
   - 空间复杂度：O(1)，只使用常数级别的额外空间

4. 特殊情况处理：
   - 空数组
   - 只有一个元素的数组
   - 两个元素的数组
   - 目标值不存在
   - 数组未旋转的情况

这个算法可以有效处理所有测试用例。如果你有任何疑问或需要更多的测试用例，请告诉我。**/
