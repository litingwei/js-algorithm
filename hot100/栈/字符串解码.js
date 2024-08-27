/**
 * 给定一个经过编码的字符串，返回它解码后的字符串。

编码规则为: k[encoded_string]，表示其中方括号内部的 encoded_string 正好重复 k 次。注意 k 保证为正整数。

你可以认为输入字符串总是有效的；输入字符串中没有额外的空格，且输入的方括号总是符合格式要求的。

此外，你可以认为原始数据不包含数字，所有的数字只表示重复的次数 k ，例如不会出现像 3a 或 2[4] 的输入。


 */
/** 
这个问题可以通过使用栈来解决。我们可以遍历字符串，当遇到数字时，将其累加以获得完整的重复次数 k。当遇到左方括号 [ 时，将当前累积的字符串和 k 压入栈中，并开始处理括号内的字符串。当遇到右方括号 ] 时，弹出栈顶的 k 和之前的字符串，然后将括号内的字符串重复 k 次，并与之前的字符串连接起来。

解题思路
使用两个栈，一个用于存储重复次数 k，另一个用于存储部分字符串。
遍历字符串：
如果遇到数字，继续累加构成完整的数字。
如果遇到 [, 将当前数字和已经构建的部分字符串压入栈，重置数字和部分字符串。
如果遇到 ], 弹出栈顶的重复次数和部分字符串，将当前部分字符串重复 k 次，并与弹出的部分字符串连接起来。
如果遇到字母，直接将其添加到当前部分字符串中。
最后，栈中的字符串就是解码后的结果。*/

var decodeString = function (s) {
  let numStack = [] // 用于存储重复次数的栈
  let strStack = [] // 用于存储部分字符串的栈
  let currentNum = 0 // 当前的重复次数
  let currentStr = '' // 当前构建的部分字符串

  for (let char of s) {
    if (!isNaN(char)) {
      // 累加数字，因为可能会有多位数字
      currentNum = currentNum * 10 + parseInt(char)
    } else if (char === '[') {
      // 遇到左方括号，将当前数字和字符串压入栈，并重置
      numStack.push(currentNum)
      strStack.push(currentStr)
      currentNum = 0
      currentStr = ''
    } else if (char === ']') {
      // 遇到右方括号，弹出栈顶的数字和部分字符串
      let repeatTimes = numStack.pop()
      let lastStr = strStack.pop()
      currentStr = lastStr + currentStr.repeat(repeatTimes)
    } else {
      // 遇到字母，继续构建当前部分字符串
      currentStr += char
    }
  }

  return currentStr
}
/**
 * 代码解释
numStack: 用来保存重复次数 k。
strStack: 用来保存部分字符串，供右方括号 ] 时使用。
currentNum: 当前数字，用于记录方括号内字符串的重复次数。
currentStr: 当前构建的部分字符串。

 */

console.log(decodeString('2[abc]3[cd]ef')) // 输出 "abcabccdcdcdef"
console.log(decodeString('3[a2[c]]')) // 输出 "accaccacc"
console.log(decodeString('3[a]2[bc]')) // 输出 "aaabcbc"
