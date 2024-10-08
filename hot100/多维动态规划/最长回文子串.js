// 给你一个字符串 s，找到 s 中最长的回文子串
/**解释：
expandAroundCenter(left, right)：这个函数通过从left和right两个索引位置开始向左右扩展，直到遇到不相等的字符为止，返回扩展后最大的回文子串。
奇数和偶数中心：对于每个字符，我们尝试以它为中心扩展（用于处理奇数长度的回文），同时也尝试以它和下一个字符之间的间隙为中心扩展（用于处理偶数长度的回文）。
比较长度：在每次扩展后，判断当前回文串的长度是否比之前的最大值大，如果是，则更新最大回文串。 */
/** 这种方法的时间复杂度是 O(n²)，因为我们需要对每个字符作为中心进行扩展，每次扩展的最坏情况是整个字符串的长度。 */
var longestPalindrome = function (s) {
  if (s.length <= 1) return s

  let maxPalindrome = ''
  // 以left和right为中心，向两边扩展，找到最长的回文子串
  const expandAroundCenter = (left, right) => {
    while (left >= 0 && right < s.length && s[left] === s[right]) {
      left--
      right++
    }
    return s.slice(left + 1, right)
  }

  for (let i = 0; i < s.length; i++) {
    // 奇数回文
    const oddPalindrome = expandAroundCenter(i, i)
    // 偶数回文
    const evenPalindrome = expandAroundCenter(i, i + 1)
    if (oddPalindrome.length > maxPalindrome.length) {
      maxPalindrome = oddPalindrome
    }
    if (evenPalindrome.length > maxPalindrome.length) {
      maxPalindrome = evenPalindrome
    }
  }
  return maxPalindrome
}
// 测试示例
const s = 'babad'
console.log(longestPalindrome(s)) // 输出 "bab" 或 "aba"
