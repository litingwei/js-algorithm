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
 * 我来帮你用 JavaScript 实现最长公共子序列 (LCS) 的解法。这是一个经典的动态规划问题。
 */

/**
 * @param {string} text1
 * @param {string} text2
 * @return {number}
 */
function longestCommonSubsequence(text1, text2) {
  // 获取两个字符串的长度
  const m = text1.length
  const n = text2.length

  // 创建 dp 数组，初始化为 0
  // dp[i][j] 表示 text1 前 i 个字符与 text2 前 j 个字符的最长公共子序列长度
  const dp = Array(m + 1)
    .fill(0)
    .map(() => Array(n + 1).fill(0))

  // 遍历两个字符串的所有字符
  for (let i = 1; i <= m; i++) {
    for (let j = 1; j <= n; j++) {
      // 如果当前字符相同
      if (text1[i - 1] === text2[j - 1]) {
        // 当前 LCS 长度等于之前 LCS 长度 + 1
        dp[i][j] = dp[i - 1][j - 1] + 1
      } else {
        // 如果当前字符不同，则取两种可能中的最大值
        dp[i][j] = Math.max(dp[i - 1][j], dp[i][j - 1])
      }
    }
  }

  // 返回最终的最长公共子序列长度
  return dp[m][n]
}

// 测试代码
console.log(longestCommonSubsequence('abcde', 'ace')) // 输出: 3
console.log(longestCommonSubsequence('abc', 'abc')) // 输出: 3
console.log(longestCommonSubsequence('abc', 'def')) // 输出: 0
console.log(longestCommonSubsequence('bl', 'yby')) // 输出: 1

/** 
这个实现使用了动态规划的方法，主要思路如下：

1. 创建一个二维 dp 数组，其中 dp[i][j] 表示 text1 的前 i 个字符和 text2 的前 j 个字符的最长公共子序列长度

2. 状态转移方程：
   - 如果当前字符相同 (text1[i-1] === text2[j-1])：
     dp[i][j] = dp[i-1][j-1] + 1
   - 如果当前字符不同：
     dp[i][j] = Math.max(dp[i-1][j], dp[i][j-1])

3. 最后返回 dp[m][n]，即为最长公共子序列的长度

时间复杂度: O(m*n)，其中 m 和 n 分别是两个字符串的长度
空间复杂度: O(m*n)，需要一个二维数组来存储中间结果

需要注意的是，这个实现只返回最长公共子序列的长度。如果你还需要获取具体的最长公共子序列内容，我可以修改代码来返回实际的子序列。你需要这个功能吗？*/
