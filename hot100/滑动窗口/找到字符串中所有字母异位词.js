/**
 * 给定两个字符串 s 和 p，找到 s 中所有 p 的 异位词 的子串，返回这些子串的起始索引。不考虑答案输出的顺序。

 * 异位词 指由相同字母重排列形成的字符串（包括相同的字符串）。
 */

/**
 * 为了找到字符串 s 中所有 p 的异位词子串，并返回这些子串的起始索引，我们可以使用滑动窗口的方法。滑动窗口法可以有效地解决这个问题，其核心思想是使用一个固定大小的窗口在字符串 s 上滑动，并在滑动过程中保持窗口内字符频率与字符串 p 的字符频率一致。

 * 具体步骤如下：
 * 初始化两个频率数组，分别记录字符串 p 和当前窗口的字符频率。
 * 移动窗口，更新当前窗口的频率数组。
 * 比较当前窗口的频率数组和字符串 p 的频率数组，如果相同，则记录起始索引。
 */

/**
 * 解释
 * 初始化:
 * result 数组用于存储结果。
 * pCount 和 windowCount 数组分别记录字符串 p 和当前窗口的字符频率。
 * 用 for 循环初始化这两个频率数组。
 * 滑动窗口:
 * 初始时比较 pCount 和 windowCount，如果相同则将起始索引 0 加入结果。
 * 在 for 循环中，窗口右移一位，同时更新窗口的字符频率。
 * 每次更新后比较 pCount 和 windowCount，如果相同则将当前窗口的起始索引加入结果。
 * 数组比较:
 * arraysEqual 函数用于比较两个频率数组是否相同。
 * 这个滑动窗口法保证了时间复杂度为 O(n)，其中 n 是字符串 s 的长度，非常高效地解决了问题。
 * @param {*} s
 * @param {*} p
 * @returns
 */

function findAnagrams(s, p) {
  const result = []
  const sLen = s.length
  const pLen = p.length
  if (sLen < pLen) {
    return result
  }
  const pCount = new Array(26).fill(0)
  const windowCount = new Array(26).fill(0)
  // Initialize the frequency arrays
  for (let i = 0; i < pLen; i++) {
    pCount[p.charCodeAt(i) - 'a'.charCodeAt(0)]++
    windowCount[s.charCodeAt(i) - 'a'.charCodeAt(0)]++
  }
  // Compare the first window
  if (pCount.toString() === windowCount.toString()) {
    result.push(0)
  }
  // Slide the window over string s
  for (let i = pLen; i < sLen; i++) {
    windowCount[s.charCodeAt(i) - 'a'.charCodeAt(0)]++
    windowCount[s.charCodeAt(i - pLen) - 'a'.charCodeAt(0)]--
    if (pCount.toString() === windowCount.toString()) {
      result.push(i - pLen + 1)
    }
  }
  return result
}

// 示例用法
const s = 'cbaebabacd'
const p = 'abc'
console.log(findAnagrams(s, p)) // 输出: [0, 6]
