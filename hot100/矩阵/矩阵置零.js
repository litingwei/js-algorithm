/**
 * 给定一个 m x n 的矩阵，如果一个元素为 0 ，则将其所在行和列的所有元素都设为 0 。请使用 原地 算法。
 */
/**
 * 要在一个 m x n 的矩阵中，如果一个元素为 0，则将其所在行和列的所有元素都设为 0，并且使用原地算法，可以通过以下方法：

使用标记变量：可以使用第一行和第一列作为标记数组来记录哪些行和列需要被设置为 0。
标记阶段：
首先，检查第一行和第一列中是否有 0，如果有，记录下来。
然后，遍历整个矩阵，如果 matrix[i][j] 为 0，则将 matrix[i][0] 和 matrix[0][j] 置为 0。
设置阶段：
根据第一行和第一列的标记，将相应的行和列设置为 0。
最后，根据第一行和第一列的初始检查结果，将第一行和第一列设置为 0（如果需要）。

 */
/**
 * 解释
检查第一行和第一列是否有 0：

先扫描第一列，如果有 0，设置 firstColHasZero 为 true。
然后扫描第一行，如果有 0，设置 firstRowHasZero 为 true。
使用第一行和第一列作为标记数组：

遍历整个矩阵，如果 matrix[i][j] 为 0，将 matrix[i][0] 和 matrix[0][j] 置为 0，作为标记。
根据标记设置相应的行和列：

根据第一列的标记设置对应的行。
根据第一行的标记设置对应的列。
设置第一行和第一列：

如果 firstRowHasZero 为 true，将第一行设置为 0。
如果 firstColHasZero 为 true，将第一列设置为 0。
这种方法在空间复杂度上为 O(1)，因为没有使用额外的矩阵或数组来存储标记信息，所有的操作都在原矩阵上完成。时间复杂度为 O(m * n)，因为需要遍历整个矩阵。
 */
/**
 *
 * @param {*} matrix
 */
function setZeroes(matrix) {
  const m = matrix.length
  const n = matrix[0].length
  let firstRowHasZero = false
  let firstColHasZero = false

  // 检查第一行和第一列是否有 0
  for (let i = 0; i < m; i++) {
    if (matrix[i][0] === 0) {
      firstColHasZero = true
      break
    }
  }

  for (let j = 0; j < n; j++) {
    if (matrix[0][j] === 0) {
      firstRowHasZero = true
      break
    }
  }

  // 使用第一行和第一列作为标记数组
  for (let i = 1; i < m; i++) {
    for (let j = 1; j < n; j++) {
      if (matrix[i][j] === 0) {
        matrix[i][0] = 0
        matrix[0][j] = 0
      }
    }
  }

  // 根据标记设置相应的行和列
  for (let i = 1; i < m; i++) {
    if (matrix[i][0] === 0) {
      for (let j = 1; j < n; j++) {
        matrix[i][j] = 0
      }
    }
  }

  for (let j = 1; j < n; j++) {
    if (matrix[0][j] === 0) {
      for (let i = 1; i < m; i++) {
        matrix[i][j] = 0
      }
    }
  }

  // 最后根据标记设置第一行和第一列
  if (firstRowHasZero) {
    for (let j = 0; j < n; j++) {
      matrix[0][j] = 0
    }
  }

  if (firstColHasZero) {
    for (let i = 0; i < m; i++) {
      matrix[i][0] = 0
    }
  }
}

// 示例用法
let matrix = [
  [1, 1, 1],
  [1, 0, 1],
  [1, 1, 1],
]
setZeroes(matrix)
console.log(matrix) // 输出: [[1,0,1],[0,0,0],[1,0,1]]
