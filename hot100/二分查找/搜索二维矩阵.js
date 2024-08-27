/**给你一个满足下述两条属性的 m x n 整数矩阵：

每行中的整数从左到右按非严格递增顺序排列。
每行的第一个整数大于前一行的最后一个整数。
给你一个整数 target ，如果 target 在矩阵中，返回 true ；否则，返回 false 。 */
/**
 * 这个问题可以通过二分查找在矩阵中找到目标值，时间复杂度为 O(log(m×n))。考虑到矩阵的行和列都有序，可以将矩阵视为一个一维有序数组进行二分查找。

解题步骤
转换索引：
将二维矩阵 matrix 转换为一维数组时，元素的索引 index 可以用 row = index // n 和 col = index % n 进行映射。其中 n 是列的数量。

二分查找：

初始化两个指针，left 为 0，right 为 m * n - 1，分别指向数组的开始和结束。
在每次迭代中，计算中间元素的索引 mid，并将其映射回二维矩阵中的位置，得到对应的矩阵元素 mid_val。
如果 mid_val 等于目标值 target，返回 true。
如果 mid_val 小于目标值 target，则将 left 指针移到 mid 右侧继续查找。
否则将 right 指针移到 mid 左侧继续查找。
直到 left 大于 right 为止，若没有找到目标值，返回 false。
 */
function searchMatrix(matrix, target) {
  if (!matrix.length || !matrix[0].length) return false

  let m = matrix.length,
    n = matrix[0].length
  let left = 0,
    right = m * n - 1

  while (left <= right) {
    let mid = Math.floor((left + right) / 2)
    let mid_val = matrix[Math.floor(mid / n)][mid % n]

    if (mid_val === target) {
      return true
    } else if (mid_val < target) {
      left = mid + 1
    } else {
      right = mid - 1
    }
  }

  return false
}
/**
 * 代码解释
m 是矩阵的行数，n 是矩阵的列数。
left 和 right 分别初始化为 0 和 m * n - 1，用于表示矩阵转换为一维数组后查找范围的左右边界。
在 while 循环中，通过 mid 计算当前查找的中间位置，并将其映射回原始的二维矩阵进行比较。
根据 mid_val 与目标值 target 的大小调整 left 和 right 指针，最终返回结果。
 */
