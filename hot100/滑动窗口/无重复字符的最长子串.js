/**
 * 给定一个字符串 s ，请你找出其中不含有重复字符的 最长子串 的长度。
 * @param {*} s
 * @returns
 */
/**
 *
 * 要找到一个字符串中不含重复字符的最长子串，可以使用滑动窗口法。滑动窗口法通过动态调整窗口的左右边界来保证窗口内的子串没有重复字符。
 * 具体步骤如下：
 * 使用两个指针 left 和 right 来表示滑动窗口的左右边界。
 * 使用一个集合 set 来存储当前窗口内的字符。
 * 遍历字符串 s：
 * 如果字符不在集合中，将字符加入集合，并移动 right 指针。
 * 如果字符在集合中，移除 left 指针指向的字符，并移动 left 指针，直到窗口内没有重复字符。
 * 在每一步更新最长子串的长度。
 */
/**
 * 
解释：

初始化指针和集合：

 * left 和 right 指针均初始化为 0。
 * maxLength 用于记录最长子串的长度。
 * set 用于存储当前窗口内的字符。
 * 滑动窗口：  
 * 使用 while 循环，条件为 right 小于字符串的长度。
 * 如果 right 指针指向的字符不在集合中，将字符加入集合，并移动 right 指针，同时更新 maxLength。
 * 如果 right 指针指向的字符在集合中，移除 left 指针指向的字符，并移动 left 指针，直到窗口内没有重复字符。
 * 返回结果：
 * 最后返回 maxLength，即最长不含重复字符的子串的长度。
 * 这个方法的时间复杂度是 O(n)，因为每个字符最多被访问两次（一次通过 right 指针，一次通过 left 指针）。
 */
function lengthOfLongestSubstring(s) {
  let left = 0
  let right = 0
  let maxLength = 0
  const set = new Set()

  while (right < s.length) {
    if (!set.has(s[right])) {
      set.add(s[right])
      right++
      maxLength = Math.max(maxLength, right - left)
    } else {
      set.delete(s[left])
      left++
    }
  }

  return maxLength
}

// 示例用法
const s = 'abcabcbb'
const result = lengthOfLongestSubstring(s)
console.log(result) // 输出: 3 (子串为 "abc")
