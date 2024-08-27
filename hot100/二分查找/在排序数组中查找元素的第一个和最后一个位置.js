/**
 * 给你一个按照非递减顺序排列的整数数组 nums，和一个目标值 target。请你找出给定目标值在数组中的开始位置和结束位置。

如果数组中不存在目标值 target，返回 [-1, -1]。

你必须设计并实现时间复杂度为 O(log n) 的算法解决此问题。
 */
function searchRange(nums, target) {
  // 辅助函数：寻找目标值的起始位置
  function findFirst(nums, target) {
    let left = 0,
      right = nums.length - 1

    // 使用二分查找法寻找目标值的起始位置
    while (left <= right) {
      let mid = Math.floor((left + right) / 2)

      // 如果中间值是目标值，检查是否是起始位置
      if (nums[mid] === target) {
        if (mid === 0 || nums[mid - 1] !== target) {
          return mid
        }
        // 如果中间值不是起始位置，则继续向左半部分查找
        right = mid - 1
      } else if (nums[mid] < target) {
        // 目标值在右半部分
        left = mid + 1
      } else {
        // 目标值在左半部分
        right = mid - 1
      }
    }
    return -1 // 如果没找到目标值，返回 -1
  }

  // 辅助函数：寻找目标值的结束位置
  function findLast(nums, target) {
    let left = 0,
      right = nums.length - 1

    // 使用二分查找法寻找目标值的结束位置
    while (left <= right) {
      let mid = Math.floor((left + right) / 2)

      // 如果中间值是目标值，检查是否是结束位置
      if (nums[mid] === target) {
        if (mid === nums.length - 1 || nums[mid + 1] !== target) {
          return mid
        }
        // 如果中间值不是结束位置，则继续向右半部分查找
        left = mid + 1
      } else if (nums[mid] < target) {
        // 目标值在右半部分
        left = mid + 1
      } else {
        // 目标值在左半部分
        right = mid - 1
      }
    }
    return -1 // 如果没找到目标值，返回 -1
  }

  // 找到起始位置和结束位置
  const first = findFirst(nums, target)
  const last = findLast(nums, target)

  // 返回找到的起始和结束位置
  return [first, last]
}
/**
 * 解题思路
使用二分查找：我们知道数组是排序的，所以使用二分查找可以在 O(log n) 时间复杂度内找到目标值。为了找到目标值的起始位置和结束位置，我们分别编写了两个辅助函数 findFirst 和 findLast。

寻找起始位置：findFirst 函数使用二分查找法找到目标值的起始位置。如果找到了目标值，我们进一步检查是否是第一个目标值。如果是，则返回该位置；如果不是，继续向左半部分查找，直到找到目标值的起始位置。

寻找结束位置：findLast 函数使用二分查找法找到目标值的结束位置。如果找到了目标值，我们进一步检查是否是最后一个目标值。如果是，则返回该位置；如果不是，继续向右半部分查找，直到找到目标值的结束位置。

返回结果：通过调用 findFirst 和 findLast 函数，分别找到目标值的起始和结束位置。如果目标值不存在于数组中，两个辅助函数都会返回 -1。最终，我们返回 [first, last] 作为结果。

该算法整体的时间复杂度为 O(log n)，符合题目要求。
 */
