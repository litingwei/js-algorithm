/**
 * 按照国际象棋的规则，皇后可以攻击与之处在同一行或同一列或同一斜线上的棋子。

n 皇后问题 研究的是如何将 n 个皇后放置在 n×n 的棋盘上，并且使皇后彼此之间不能相互攻击。

给你一个整数 n ，返回所有不同的 n 皇后问题 的解决方案。

每一种解法包含一个不同的 n 皇后问题 的棋子放置方案，该方案中 'Q' 和 '.' 分别代表了皇后和空位。

 */
var solveNQueens = function (n) {
  let res = [] // 存放所有解法的结果
  let board = Array.from({ length: n }, () => Array(n).fill('.')) // 创建一个 n x n 的棋盘

  function isValid(row, col) {
    // 检查同一列是否有皇后
    for (let i = 0; i < row; i++) {
      if (board[i][col] === 'Q') return false
    }

    // 检查左上方斜线是否有皇后
    for (let i = row - 1, j = col - 1; i >= 0 && j >= 0; i--, j--) {
      if (board[i][j] === 'Q') return false
    }

    // 检查右上方斜线是否有皇后
    for (let i = row - 1, j = col + 1; i >= 0 && j < n; i--, j++) {
      if (board[i][j] === 'Q') return false
    }

    return true
  }

  function backtrack(row) {
    if (row === n) {
      // 如果所有行都成功放置了皇后
      res.push(board.map((row) => row.join(''))) // 将当前棋盘的排列加入结果集
      return
    }

    for (let col = 0; col < n; col++) {
      // 尝试在每一列放置皇后
      if (isValid(row, col)) {
        // 检查是否可以在 (row, col) 放置皇后
        board[row][col] = 'Q' // 放置皇后
        backtrack(row + 1) // 递归放置下一行的皇后
        board[row][col] = '.' // 回溯，移除皇后
      }
    }
  }

  backtrack(0) // 从第 0 行开始放置皇后
  return res // 返回所有可能的解法
}
/**
 * 解释：
棋盘初始化： 创建一个 n x n 的棋盘，初始状态下所有格子都为空，用 '.' 表示。

有效性检查 (isValid)：

检查当前列是否已经有皇后。
检查当前格子的左上方斜线和右上方斜线是否已经有皇后。
如果三者都没有冲突，则在该位置放置皇后是合法的。
回溯 (backtrack)：

从第 row 行开始，尝试在每一列放置皇后。如果在某个位置放置成功，则递归地在下一行继续放置皇后。
如果在某一行放置皇后后导致后续行不能合法放置，则撤销（回溯）该皇后的放置，继续尝试其他位置。
终止条件： 当成功放置了所有 n 个皇后时，将当前棋盘配置加入结果集。

返回结果： 所有不同的 n 皇后问题的解决方案。
 */
