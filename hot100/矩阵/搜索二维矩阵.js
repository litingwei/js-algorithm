/**
 * 
编写一个高效的算法来搜索 m x n 矩阵 matrix 中的一个目标值 target 。该矩阵具有以下特性：

每行的元素从左到右升序排列。
每列的元素从上到下升序排列。


要在具有每行和每列都按升序排列的 𝑚×𝑛 矩阵中搜索目标值，可以利用矩阵的这种特殊性质，通过一种高效的搜索方法来实现。我们可以从矩阵的右上角开始搜索，这样可以在每一步都排除掉一行或一列。

算法步骤
从矩阵的右上角开始，即位置 (0, n-1)，其中 n 是列数。
比较当前元素与目标值：
如果当前元素等于目标值，则返回 true。
如果当前元素大于目标值，则向左移动一列（即列索引减一）。
如果当前元素小于目标值，则向下移动一行（即行索引加一）。
如果索引超出了矩阵的边界，则表示目标值不在矩阵中，返回 false。
这种方法的时间复杂度为 O(m + n)，因为在最坏情况下，可能需要遍历矩阵的每一行和每一列各一次。

解释
初始化：从矩阵的右上角开始，即位置 (0, n-1)，其中 n 是列数。
搜索过程：
如果当前元素等于目标值，则返回 true。
如果当前元素大于目标值，向左移动一列（即列索引减一）。
如果当前元素小于目标值，向下移动一行（即行索引加一）。
终止条件：如果行索引超出了 m 或列索引小于 0，则表示目标值不在矩阵中，返回 false。
通过这种方法，我们可以高效地在矩阵中搜索目标值。
 */
function searchMatrix(matrix, target) {
  if (!matrix.length || !matrix[0].length) {
    return false
  }

  let m = matrix.length
  let n = matrix[0].length
  let row = 0
  let col = n - 1

  while (row < m && col >= 0) {
    if (matrix[row][col] === target) {
      return true
    } else if (matrix[row][col] > target) {
      col--
    } else {
      row++
    }
  }

  return false
}

// 示例用法
const matrix = [
  [1, 4, 7, 11, 15],
  [2, 5, 8, 12, 19],
  [3, 6, 9, 16, 22],
  [10, 13, 14, 17, 24],
  [18, 21, 23, 26, 30],
]
const target = 5
console.log(searchMatrix(matrix, target)) // 输出: true

const target2 = 20
console.log(searchMatrix(matrix, target2)) // 输出: false
