/**
 * 给你一个字符串 s，请你将 s 分割成一些子串，使每个子串都是 
回文串
 。返回 s 所有可能的分割方案。
 */
/**
 * 要解决这个问题，我们可以使用 回溯算法 来生成所有可能的分割方案，并在每次分割时检查每个子串是否为回文串。具体步骤如下：

解题思路
回溯搜索：

从字符串的第一个字符开始，尝试将字符串分割成多个子串。
在每次分割时，检查当前子串是否为回文串。
如果是回文串，则将该子串加入当前的分割方案中，并递归地处理剩余的字符串。
当遍历完所有字符后，将当前的分割方案加入到结果集中。
检查回文串：

一个子串如果从左到右和从右到左读取都相同，则为回文串。
 */
var partition = function (s) {
  const res = []
  const path = []

  const isPalindrome = (str, left, right) => {
    while (left < right) {
      if (str[left] !== str[right]) return false
      left++
      right--
    }
    return true
  }

  const backtrack = (start) => {
    if (start >= s.length) {
      res.push([...path])
      return
    }

    for (let end = start; end < s.length; end++) {
      if (isPalindrome(s, start, end)) {
        path.push(s.substring(start, end + 1))
        backtrack(end + 1)
        path.pop()
      }
    }
  }

  backtrack(0)
  return res
}
/**
 * 代码解释
回文串判断函数 isPalindrome：

传入字符串 str 和两个指针 left、right。
从两端开始逐步向中间检查字符是否相等。如果相等，继续向中间移动；如果不相等，返回 false。
回溯函数 backtrack：

start 表示当前字符串分割的起始位置。
在每个递归层次中，遍历所有可能的子串终止位置 end。
如果子串 s.substring(start, end + 1) 是回文串，则将其加入当前路径 path，并递归处理剩下的部分。
当遍历完所有字符时，表示找到了一种可行的分割方案，将 path 复制并加入结果 res 中。
主流程：

从字符串的第一个字符开始，逐步尝试每种可能的分割方法，生成所有满足条件的分割方案。
 */
console.log(partition('aab'))
// 预期输出: [["a","a","b"],["aa","b"]]

console.log(partition('a'))
// 预期输出: [["a"]]

console.log(partition('racecar'))
// 预期输出: [["r","a","c","e","c","a","r"],["r","aceca","r"],["racecar"]]
