/**
 * 给定一个排序数组和一个目标值，在数组中找到目标值，并返回其索引。如果目标值不存在于数组中，返回它将会被按顺序插入的位置。

请必须使用时间复杂度为 O(log n) 的算法。
 */
var searchInsert = function (nums, target) {
  let left = 0
  let right = nums.length - 1

  while (left <= right) {
    let mid = Math.floor((left + right) / 2)

    if (nums[mid] === target) {
      return mid // 找到目标值，返回索引
    } else if (nums[mid] < target) {
      left = mid + 1 // 目标值在右半部分
    } else {
      right = mid - 1 // 目标值在左半部分
    }
  }

  return left // 如果没有找到，left 就是插入位置
}
/**
 * 解释：
输入参数：

nums：一个已经排好序的数组。
target：需要查找的目标值。
初始化：

定义两个指针 left 和 right 分别指向数组的起始和末尾。
left 初始化为 0，right 初始化为 nums.length - 1。
二分查找过程：

计算中间索引 mid，即 (left + right) / 2，取整。
如果 nums[mid] 等于 target，直接返回 mid。
如果 nums[mid] 小于 target，说明目标值可能在右半部分，于是将 left 更新为 mid + 1。
如果 nums[mid] 大于 target，说明目标值可能在左半部分，于是将 right 更新为 mid - 1。
返回结果：

当 left 大于 right 时，循环终止，此时 left 指向的就是目标值应该插入的位置。如果目标值在数组中存在，循环会提前返回其位置；否则，left 的位置即为目标值的插入位置。
时间复杂度：
时间复杂度： O(log n) 因为每次循环都将搜索区间缩小一半。

空间复杂度： O(1) 因为我们只用了固定的额外空间来存储指针和中间索引。

这个算法高效且简单，利用了二分查找的特性在排序数组中快速定位目标值或确定其插入位置。
 */
