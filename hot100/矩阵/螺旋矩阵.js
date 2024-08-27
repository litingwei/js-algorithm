/**
 * 给你一个 m 行 n 列的矩阵 matrix ，请按照 顺时针螺旋顺序 ，返回矩阵中的所有元素。

 */
/**
 * 
 按照顺时针螺旋顺序遍历一个矩阵，可以遵循以下步骤：

初始化边界：上边界 (top)、下边界 (bottom)、左边界 (left)、右边界 (right)。
按顺时针方向依次遍历：从左到右、从上到下、从右到左、从下到上。
在每次遍历后，更新对应的边界，直到遍历完成。
 */
/**
 * 
 解释
初始化边界：

top 为 0，表示上边界。
bottom 为 matrix.length - 1，表示下边界。
left 为 0，表示左边界。
right 为 matrix[0].length - 1，表示右边界。
按顺时针方向依次遍历：

从左到右：遍历 top 行，从 left 到 right，然后 top++。
从上到下：遍历 right 列，从 top 到 bottom，然后 right--。
从右到左：遍历 bottom 行，从 right 到 left，然后 bottom--。这个操作需要在 top <= bottom 的条件下进行。
从下到上：遍历 left 列，从 bottom 到 top，然后 left++。这个操作需要在 left <= right 的条件下进行。
更新边界：

在每次遍历后，更新对应的边界，确保不会重复遍历相同的元素。
终止条件：

当 top > bottom 或 left > right 时，终止循环。
这种方法遍历整个矩阵的时间复杂度为 O(m * n)，其中 m 和 n 分别是矩阵的行数和列数。
 */

function spiralOrder(matrix) {
  if (matrix.length === 0) return []

  const result = []
  let top = 0
  let bottom = matrix.length - 1
  let left = 0
  let right = matrix[0].length - 1

  while (top <= bottom && left <= right) {
    // 从左到右
    for (let i = left; i <= right; i++) {
      result.push(matrix[top][i])
    }
    top++

    // 从上到下
    for (let i = top; i <= bottom; i++) {
      result.push(matrix[i][right])
    }
    right--

    if (top <= bottom) {
      // 从右到左
      for (let i = right; i >= left; i--) {
        result.push(matrix[bottom][i])
      }
      bottom--
    }

    if (left <= right) {
      // 从下到上
      for (let i = bottom; i >= top; i--) {
        result.push(matrix[i][left])
      }
      left++
    }
  }

  return result
}

// 示例用法
const matrix = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
]
console.log(spiralOrder(matrix)) // 输出: [1, 2, 3, 6, 9, 8, 7, 4, 5]
