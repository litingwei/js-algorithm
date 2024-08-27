// export default (arr, m, n) => {
//   let dp = (m, n) => {
//     // 如果只有2*2的格子
//     if (m === 2 && n === 2) {
//       return arr[1][1] === 1 || arr[1][0] + arr[0][1] === 2
//         ? 0
//         : arr[1][0] === 1 || arr[0][1] === 1
//         ? 1
//         : 2
//     } else if (m < 2 || n < 2) {
//       // 单行有1就返回0
//       if (m < 2) {
//         return arr[m - 1].includes(1) ? 0 : 1
//       } else {
//         // 单列有1就返回0
//         for (let i = 0; i < m; i++) {
//           if (arr[i][n - 1] === 1) return 0
//         }
//         return 1
//       }
//     } else {
//       return dp(m - 1, n) + dp(m, n - 1)
//     }
//   }
//   return dp(m, n)
// }

export default function uniquePathsWithObstacles(obstacleGrid) {
  const m = obstacleGrid.length
  const n = obstacleGrid[0].length

  // 如果起始点或终点是障碍物，返回0
  if (obstacleGrid[0][0] === 1 || obstacleGrid[m - 1][n - 1] === 1) {
    return 0
  }

  // 初始化dp数组
  const dp = Array(m)
    .fill(0)
    .map(() => Array(n).fill(0))

  // 起始点路径数设为1
  dp[0][0] = 1

  // 填充dp数组
  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      if (obstacleGrid[i][j] === 1) {
        dp[i][j] = 0
      } else {
        if (i > 0) dp[i][j] += dp[i - 1][j]
        if (j > 0) dp[i][j] += dp[i][j - 1]
      }
    }
  }

  return dp[m - 1][n - 1]
}

// 测试用例
const obstacleGrid = [
  [0, 0, 0],
  [0, 1, 0],
  [0, 0, 0],
]

console.log(uniquePathsWithObstacles(obstacleGrid)) // 输出: 2
