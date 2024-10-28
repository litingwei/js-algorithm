/**
 * 给你两个单词 word1 和 word2， 请返回将 word1 转换成 word2 所使用的最少操作数  。

你可以对一个单词进行如下三种操作：

插入一个字符
删除一个字符
替换一个字符
 */
// 这是一个经典的编辑距离(Edit Distance)问题，我将用动态规划来解决它。

/**
 * @param {string} word1
 * @param {string} word2
 * @return {number}
 */
function minDistance(word1, word2) {
  // 创建二维DP数组，dp[i][j]表示word1的前i个字符转换到word2的前j个字符需要的最少操作数
  const m = word1.length
  const n = word2.length
  const dp = Array(m + 1)
    .fill(0)
    .map(() => Array(n + 1).fill(0))

  // 初始化第一行和第一列
  // 第一行：word1为空，转换到word2需要的操作数就是插入字符的次数
  for (let j = 0; j <= n; j++) {
    dp[0][j] = j
  }
  // 第一列：word2为空，转换到word2需要的操作数就是删除字符的次数
  for (let i = 0; i <= m; i++) {
    dp[i][0] = i
  }

  // 填充DP数组
  for (let i = 1; i <= m; i++) {
    for (let j = 1; j <= n; j++) {
      if (word1[i - 1] === word2[j - 1]) {
        // 如果当前字符相同，不需要操作
        dp[i][j] = dp[i - 1][j - 1]
      } else {
        // 如果当前字符不同，取三种操作中的最小值：
        // 1. 替换操作：dp[i-1][j-1] + 1
        // 2. 删除操作：dp[i-1][j] + 1
        // 3. 插入操作：dp[i][j-1] + 1
        dp[i][j] = Math.min(
          dp[i - 1][j - 1] + 1, // 替换
          dp[i - 1][j] + 1, // 删除
          dp[i][j - 1] + 1 // 插入
        )
      }
    }
  }

  // 返回将word1转换为word2所需的最少操作数
  return dp[m][n]
}

// 测试用例
console.log(minDistance('horse', 'ros')) // 输出: 3
console.log(minDistance('intention', 'execution')) // 输出: 5

/**
 * 这个实现使用了动态规划的方法，主要思路如下：
 *
1. 创建一个 `(m+1) × (n+1)` 的二维数组 `dp`，其中 m 和 n 分别是 word1 和 word2 的长度。
2. `dp[i][j]` 表示将 word1 的前 i 个字符转换到 word2 的前 j 个字符需要的最少操作数。
3. 初始化：
   - 第一行表示 word1 为空时，转换到 word2 需要的插入操作数
   - 第一列表示 word2 为空时，转换到 word2 需要的删除操作数
4. 对于每个位置 `dp[i][j]`，有两种情况：
   - 如果当前字符相同，则不需要操作，直接取 `dp[i-1][j-1]` 的值
   - 如果当前字符不同，则取三种操作（替换、删除、插入）的最小值加1

这个算法的时间复杂度是 O(mn)，空间复杂度也是 O(mn)。需要注意的是，这个实现没有做边界情况的检查，如果需要更健壮的代码，可以添加对输入参数的验证。

要使用这段代码，直接调用 `minDistance` 函数并传入两个字符串参数即可。比如：
*/

const result = minDistance('horse', 'ros')
console.log(result) // 输出: 3
