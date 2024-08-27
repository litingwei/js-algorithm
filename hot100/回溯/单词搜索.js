/**
 * 给定一个 m x n 二维字符网格 board 和一个字符串单词 word 。如果 word 存在于网格中，返回 true ；否则，返回 false 。

单词必须按照字母顺序，通过相邻的单元格内的字母构成，其中“相邻”单元格是那些水平相邻或垂直相邻的单元格。同一个单元格内的字母不允许被重复使用。

 */
var exist = function (board, word) {
  const m = board.length
  const n = board[0].length

  const backtrack = (i, j, k) => {
    // 检查边界条件和字符是否匹配
    if (i < 0 || i >= m || j < 0 || j >= n || board[i][j] !== word[k]) {
      return false
    }
    // 如果所有字符都匹配，返回 true
    if (k === word.length - 1) {
      return true
    }

    // 标记当前单元格，以防止重复使用
    const temp = board[i][j]
    board[i][j] = '#'

    // 递归地检查上下左右四个方向
    const found =
      backtrack(i + 1, j, k + 1) ||
      backtrack(i - 1, j, k + 1) ||
      backtrack(i, j + 1, k + 1) ||
      backtrack(i, j - 1, k + 1)

    // 恢复当前单元格的值
    board[i][j] = temp

    return found
  }

  // 遍历每个单元格，尝试寻找匹配的路径
  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      if (backtrack(i, j, 0)) {
        return true
      }
    }
  }
  return false
}
/**
 * 解释：
输入参数：

board：m x n 的二维字符网格。
word：需要在网格中查找的目标单词。
backtrack 函数：

i, j：当前正在检查的网格单元格的坐标。
k：当前正在匹配的 word 中的字符索引。
返回条件：
如果坐标 i, j 超出边界，或当前单元格的字符不匹配 word[k]，则返回 false。
如果所有字符匹配成功（k === word.length - 1），则返回 true。
搜索过程：

从当前单元格出发，递归检查四个方向（上、下、左、右）。
为了防止同一个单元格被重复使用，将当前单元格的值临时替换为特殊字符 #，表示该单元格已经被访问过。在回溯时，再恢复该单元格的原始值。
主循环：

遍历网格的每个单元格，以每个单元格为起点，尝试找到匹配的路径。如果找到路径，立即返回 true。
最终返回：

如果在所有可能的起点中找到了匹配的路径，则返回 true；否则返回 false。
 */
