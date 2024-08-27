/**
 * 整数数组 nums 按升序排列，数组中的值 互不相同 。

在传递给函数之前，nums 在预先未知的某个下标 k（0 <= k < nums.length）上进行了 旋转，使数组变为 [nums[k], nums[k+1], ..., nums[n-1], nums[0], nums[1], ..., nums[k-1]]（下标 从 0 开始 计数）。例如， [0,1,2,4,5,6,7] 在下标 3 处经旋转后可能变为 [4,5,6,7,0,1,2] 。

给你 旋转后 的数组 nums 和一个整数 target ，如果 nums 中存在这个目标值 target ，则返回它的下标，否则返回 -1 。

你必须设计一个时间复杂度为 O(log n) 的算法解决此问题。


 */
/**
 * 解题思路
数组的特性：

数组被旋转过，因此可以将其分为两个有序的子数组：左子数组和右子数组。一个子数组是严格递增的，另一个可能包含被旋转过的元素。
二分查找：

通过二分查找的过程中，判断中间元素 nums[mid] 落在哪个子数组中，从而确定该如何缩小查找范围。
步骤：

初始时设定左右指针 left 和 right。
计算中间位置 mid。
判断 nums[mid] 是否等于目标值 target。如果是，则直接返回 mid。
如果 nums[left] 到 nums[mid] 是有序的：
判断 target 是否在 nums[left] 到 nums[mid] 之间。如果是，则在左侧继续搜索；否则在右侧继续搜索。
如果 nums[mid] 到 nums[right] 是有序的：
判断 target 是否在 nums[mid] 到 nums[right] 之间。如果是，则在右侧继续搜索；否则在左侧继续搜索。
如果未找到目标值，返回 -1。

 */
function search(nums, target) {
  let left = 0
  let right = nums.length - 1

  while (left <= right) {
    let mid = Math.floor((left + right) / 2)

    // 找到目标值，返回索引
    if (nums[mid] === target) {
      return mid
    }

    // 判断左半部分是否有序
    if (nums[left] <= nums[mid]) {
      // target 在左半部分
      if (nums[left] <= target && target < nums[mid]) {
        right = mid - 1
      } else {
        // target 在右半部分
        left = mid + 1
      }
    } else {
      // 右半部分有序
      // target 在右半部分
      if (nums[mid] < target && target <= nums[right]) {
        left = mid + 1
      } else {
        // target 在左半部分
        right = mid - 1
      }
    }
  }

  // 未找到目标值
  return -1
}
/**
 * 代码解释
left 和 right 指针：用于在数组中进行二分查找的左右边界。

mid 计算：mid 是当前查找范围的中间位置。

查找条件：

如果 nums[mid] 恰好等于 target，则返回 mid，即目标值的位置。
如果 nums[left] <= nums[mid]，说明左半部分是有序的：
检查 target 是否在 nums[left] 和 nums[mid] 之间。如果是，则将 right 移动到 mid - 1；否则，将 left 移动到 mid + 1。
如果右半部分是有序的 (nums[mid] <= nums[right])：
检查 target 是否在 nums[mid] 和 nums[right] 之间。如果是，则将 left 移动到 mid + 1；否则，将 right 移动到 mid - 1。
返回值：如果在整个查找过程中没有找到目标值，则返回 -1。

时间复杂度
整个过程是基于二分查找的，因此时间复杂度为 O(logn)。
 */
