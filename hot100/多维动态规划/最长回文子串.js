// 给你一个字符串 s，找到 s 中最长的回文子串
// 我来帮你实现一个查找最长回文子串的解决方案。这里我将使用中心扩展法，这是一种高效且直观的方法。

/**
 * @param {string} s
 * @return {string}
 */
function longestPalindrome(s) {
  if (s.length < 2) return s

  let start = 0
  let maxLength = 1

  /**
   * 从中心向两边扩展，寻找最长回文子串
   * @param {number} left 左边起始位置
   * @param {number} right 右边起始位置
   */
  function expandAroundCenter(left, right) {
    // 当左右指针在有效范围内，且字符相等时，继续扩展
    while (left >= 0 && right < s.length && s[left] === s[right]) {
      // 如果找到更长的回文子串，更新起始位置和长度
      const currentLength = right - left + 1
      if (currentLength > maxLength) {
        start = left
        maxLength = currentLength
      }
      left--
      right++
    }
  }

  // 遍历每个可能的中心点
  for (let i = 0; i < s.length; i++) {
    // 扩展奇数长度的回文子串（以单个字符为中心）
    expandAroundCenter(i, i)

    // 扩展偶数长度的回文子串（以两个字符之间的空隙为中心）
    expandAroundCenter(i, i + 1)
  }

  // 返回找到的最长回文子串
  return s.substring(start, start + maxLength)
}

// 测试用例
console.log(longestPalindrome('babad')) // 输出: "bab" 或 "aba"
console.log(longestPalindrome('cbbd')) // 输出: "bb"
console.log(longestPalindrome('a')) // 输出: "a"
console.log(longestPalindrome('ac')) // 输出: "a"

/** 
这个解决方案使用了中心扩展法，它的核心思想是：对于每个可能的回文中心，向两边扩展并检查是否构成回文串。主要实现细节如下：

1. 特殊情况处理：
   - 如果字符串长度小于2，直接返回原字符串

2. 中心扩展方法：
   - 从一个中心点开始，向两边扩展
   - 当两边的字符相等时继续扩展
   - 记录过程中找到的最长回文子串的起始位置和长度

3. 考虑两种情况：
   - 奇数长度的回文串（中心是一个字符）
   - 偶数长度的回文串（中心是两个字符之间的位置）

4. 算法复杂度：
   - 时间复杂度：O(n²)，其中n是字符串的长度
   - 空间复杂度：O(1)，只使用了常数额外空间

使用示例：
```javascript
console.log(longestPalindrome("babad")); // 输出: "bab"
console.log(longestPalindrome("cbbd"));  // 输出: "bb"
```

这个算法的优点是：
- 实现直观，易于理解
- 空间复杂度低
- 不需要额外的预处理

需要注意的是，对于同样长度的回文子串，该算法返回第一个找到的结果。比如对于字符串"babad"，"bab"和"aba"都是最长的回文子串，算法会返回"bab"。

你想了解更多关于其他解决方法（比如动态规划法）或者需要针对特定场景的优化吗？
**/
