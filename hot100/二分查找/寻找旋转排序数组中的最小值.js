/**
 * 已知一个长度为 n 的数组，预先按照升序排列，经由 1 到 n 次 旋转 后，得到输入数组。例如，原数组 nums = [0,1,2,4,5,6,7] 在变化后可能得到：
若旋转 4 次，则可以得到 [4,5,6,7,0,1,2]
若旋转 7 次，则可以得到 [0,1,2,4,5,6,7]
注意，数组 [a[0], a[1], a[2], ..., a[n-1]] 旋转一次 的结果为数组 [a[n-1], a[0], a[1], a[2], ..., a[n-2]] 。

给你一个元素值 互不相同 的数组 nums ，它原来是一个升序排列的数组，并按上述情形进行了多次旋转。请你找出并返回数组中的 最小元素 。

你必须设计一个时间复杂度为 O(log n) 的算法解决此问题。
 */
var findMin = function (nums) {
  // 初始化两个指针，分别指向数组的起始和结束位置
  let left = 0
  let right = nums.length - 1

  // 使用循环继续二分查找，直到左右指针重合
  while (left <= right) {
    // 计算中间位置的索引
    const mid = Math.floor((left + right) / 2)

    // 判断当前左边界到中间位置是否有序
    if (nums[left] <= nums[mid]) {
      // 如果中间位置的值小于等于右边界的值，说明整个范围是有序的
      // 此时最小值一定是left位置的元素
      if (nums[mid] <= nums[right]) {
        return nums[left]
      }
      // 如果不是，那么我们更新左边界到中间位置的右边一位
      left = mid + 1
    }
    // 如果左边界到中间位置不是有序的，说明最小值一定在这一范围内
    else {
      right = mid
    }
  }
  // 如果没有找到最小值（理论上不会出现这种情况），返回-1
  return -1
}
/**
 * 详细解释
初始边界设置：定义两个指针 left 和 right 分别指向数组的起始和结束位置。
二分查找的循环：在循环中，首先计算 mid 的位置。然后，根据 nums[left] 和 nums[mid] 之间的大小关系，判断当前范围是否有序。
判断是否有序：如果左边界值小于等于中间值，说明左半部分是有序的。此时，如果 nums[mid] <= nums[right]，说明整个数组是有序的，返回 nums[left] 即可。
更新边界：如果上面的条件不满足，则更新 left 或 right 的指针，以继续查找。这个过程中，不断缩小查找的范围，最终找到最小值。
返回最小值：一旦找到最小值，立即返回；否则返回 -1（作为错误标志，理论上不会到达这里）。

 */
