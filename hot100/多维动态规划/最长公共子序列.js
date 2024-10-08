/**
 * 给定两个字符串 text1 和 text2，返回这两个字符串的最长 公共子序列 的长度。如果不存在 公共子序列 ，返回 0 。
 * 一个字符串的 子序列 是指这样一个新的字符串：它是由原字符串在不改变字符的相对顺序的情况下删除某些字符（也可以不删除任何字符）后组成的新字符串。
 * 例如，"ace" 是 "abcde" 的子序列，但 "aec" 不是 "abcde" 的子序列。
 * 两个字符串的 公共子序列 是这两个字符串所共同拥有的子序列。
 */

/**
 * 示例 1：
 * 输入：text1 = "abcde", text2 = "ace"
 * 输出：3
 * 解释：最长公共子序列是 "ace" ，它的长度为 3 。
 *
 * 示例 2：
 * 输入：text1 = "abc", text2 = "abc"
 * 输出：3
 * 解释：最长公共子序列是 "abc" ，它的长度为 3 。
 *
 * 示例 3：
 * 输入：text1 = "abc", text2 = "def"
 * 输出：0
 * 解释：两个字符串没有公共子序列，返回 0 。
 */

/**
 * 解题思路：
 * 使用动态规划来解决这个问题。我们定义一个二维数组 dp，其中 dp[i][j] 表示 text1 的前 i 个字符和 text2 的前 j 个字符的最长公共子序列的长度。
 * 初始化：dp[0][j] = 0 和 dp[i][0] = 0，表示当任意一个字符串为空时，最长公共子序列的长度为 0。
 * 状态转移：
 * 如果 text1[i-1] == text2[j-1]，则 dp[i][j] = dp[i-1][j-1] + 1。
 * 如果 text1[i-1] != text2[j-1]，则 dp[i][j] = Math.max(dp[i-1][j], dp[i][j-1])。
 * 最终结果：dp[text1.length][text2.length]。
 */

var longestCommonSubsequence = function (text1, text2) {
  const m = text1.length
  const n = text2.length
  const dp = Array.from({ length: m + 1 }, () => Array(n + 1).fill(0))

  for (let i = 1; i <= m; i++) {
    for (let j = 1; j <= n; j++) {
      if (text1[i - 1] === text2[j - 1]) {
        dp[i][j] = dp[i - 1][j - 1] + 1
      } else {
        dp[i][j] = Math.max(dp[i - 1][j], dp[i][j - 1])
      }
    }
  }

  return dp[m][n]
}

// 测试示例
const text1 = 'abcde'
const text2 = 'ace'
console.log(longestCommonSubsequence(text1, text2)) // 输出 3，因为最长公共子序列是 "ace"
