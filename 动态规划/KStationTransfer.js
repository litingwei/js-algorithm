export default (src, dst, k) => {
  // 航班列表
  let fights = [
    [0, 1, 100],
    [1, 2, 100],
    [0, 2, 500],
  ]
  let cheap = (src, dst, k) => {
    let prev = fights.filter((item) => item[1] === dst)
    let min = Math.min.apply(
      null,
      prev.map((item) => {
        if (item[0] === src && k > -1) {
          return item[2]
        } else if (k === 0 && item[0] !== src) {
          return Number.MAX_SAFE_INTEGER
        } else {
          return item[2] + cheap(src, item[0], k - 1)
        }
      })
    )
    return min
  }
  return cheap(src, dst, k) || -1
}
/**
 * 
 * @param {*} n 
 * @param {*} flights 
 * @param {*} src 
 * @param {*} dst 
 * @param {*} k 
 * @returns 
 * 可以使用动态规划来解决这个问题。我们可以使用一个二维数组 dp，其中 dp[i][j] 表示从起点出发，经过最多 i 次中转，到达城市 j 的最小费用。动态规划的步骤如下：

初始化 dp 数组，其中 dp[0][src] 为 0，表示从起点到起点的费用为 0，其余位置初始化为 Infinity，表示初始时从起点到其他城市的费用未知。
对于每一个中转次数 i（从 1 到 k + 1），更新 dp[i][j]，通过遍历所有航班，根据 dp[i-1][from] 和当前航班的费用来更新 dp[i][to]。
最终结果是 dp[k+1][dst]，表示从起点出发，最多经过 k 次中转到达目的地的最小费用。如果 dp[k+1][dst] 仍然是 Infinity，说明没有找到符合条件的路径，返回 -1，否则返回 dp[k+1][dst]。
 */
function findCheapestPrice(n, flights, src, dst, k) {
  const dp = Array.from({ length: k + 2 }, () => Array(n).fill(Infinity))
  dp[0][src] = 0
  // 动态规划
  for (let i = 1; i <= k + 1; i++) {
    dp[i][src] = 0 // 起点到起点费用为0
    for (const [from, to, price] of flights) {
      if (dp[i - 1][from] !== Infinity) {
        dp[i][to] = Math.min(dp[i][to], dp[i - 1][from] + price)
      }
    }
  }
  return dp[k + 1][dst] === Infinity ? -1 : dp[k + 1][dst]
}
const n = 4
const flights = [
  [0, 1, 100],
  [1, 2, 100],
  [2, 0, 100],
  [1, 3, 600],
  [2, 3, 200],
]
const src = 0
const dst = 3
const k = 1

console.log(findCheapestPrice(n, flights, src, dst, k))
