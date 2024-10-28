/**
 * 给定一个包含非负整数的 m x n 网格 grid ，请找出一条从左上角到右下角的路径，使得路径上的数字总和为最小。
 */
// 我来帮你实现一个寻找网格最小路径和的JavaScript解决方案。这是一个经典的动态规划问题。

/**
 * @param {number[][]} grid
 * @return {number}
 */
function minPathSum(grid) {
  // 如果网格为空，返回0
  if (!grid || grid.length === 0) {
    return 0
  }

  const m = grid.length // 行数
  const n = grid[0].length // 列数

  // 创建dp数组，用于存储到达每个位置的最小路径和
  const dp = Array(m)
    .fill()
    .map(() => Array(n).fill(0))

  // 初始化第一个位置
  dp[0][0] = grid[0][0]

  // 初始化第一列
  for (let i = 1; i < m; i++) {
    dp[i][0] = dp[i - 1][0] + grid[i][0]
  }

  // 初始化第一行
  for (let j = 1; j < n; j++) {
    dp[0][j] = dp[0][j - 1] + grid[0][j]
  }

  // 填充dp数组
  for (let i = 1; i < m; i++) {
    for (let j = 1; j < n; j++) {
      // 每个位置的最小路径和等于其上方或左方的最小路径和加上当前位置的值
      dp[i][j] = Math.min(dp[i - 1][j], dp[i][j - 1]) + grid[i][j]
    }
  }

  // 返回右下角位置的最小路径和
  return dp[m - 1][n - 1]
}

// 测试用例
const grid = [
  [1, 3, 1],
  [1, 5, 1],
  [4, 2, 1],
]

console.log(minPathSum(grid)) // 输出: 7 (路径为: 1→3→1→1→1)

/**
 * 这个解决方案使用动态规划的方法来解决问题。让我解释一下主要的实现思路：

1. 创建一个与输入网格相同大小的dp数组，用于存储到达每个位置的最小路径和

2. 初始化：
   - 第一个位置就是网格的第一个数字
   - 第一列的每个位置只能从上方到达
   - 第一行的每个位置只能从左方到达

3. 对于其他位置：
   - 每个位置只能从上方或左方到达
   - 取上方和左方中的较小值，加上当前位置的值

4. 最终返回dp数组右下角的值，即为所求的最小路径和

示例中的路径为：1 → 3 → 1 → 1 → 1，总和为7，这是从左上角到右下角的最小路径和。

你可以这样使用这个函数：

```javascript
const grid = [
    [1,3,1],
    [1,5,1],
    [4,2,1]
];
const result = minPathSum(grid);
console.log(result); // 7
```

需要注意的是，这种解法的：
- 时间复杂度：O(m*n)，其中m和n分别是网格的行数和列数
- 空间复杂度：O(m*n)，使用了一个dp数组来存储中间结果

如果你想要优化空间复杂度，我们也可以修改原始网格来存储路径和，这样可以把空间复杂度降到O(1)。你需要这样的优化版本吗？
 */
