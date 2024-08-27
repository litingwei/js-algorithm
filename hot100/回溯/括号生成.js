/**
 * 数字 n 代表生成括号的对数，请你设计一个函数，用于能够生成所有可能的并且 有效的 括号组合。
 */
/**生成所有可能且有效的括号组合问题，可以通过回溯算法来解决。回溯算法允许我们在构造解的过程中进行试探，并在某个条件不满足时，撤销已经做出的选择（即“回溯”），从而尝试其他可能的选择。*/
var generateParenthesis = function (n) {
  let res = []

  function backtrack(current, open, close) {
    // 如果当前生成的括号长度等于 n 对括号的最大长度
    if (current.length === 2 * n) {
      res.push(current)
      return
    }

    // 如果可以添加左括号
    if (open < n) {
      open++
      current += '('
      backtrack(current, open, close)
      open--
      current = current.slice(0, -1)
    }

    // 如果可以添加右括号
    if (close < open) {
      close++
      current += ')'
      backtrack(current, open, close)
      close--
      current = current.slice(0, -1)
    }
  }

  // 从空字符串开始，初始状态下左括号和右括号的数量都为 0
  backtrack('', 0, 0)
  return res
}
/**
 * 解释：
res 数组： 用于存储所有有效的括号组合结果。

backtrack 函数：

current： 当前构建的括号组合。
open： 当前使用的左括号数量。
close： 当前使用的右括号数量。
该函数是一个递归函数，旨在通过不断尝试添加左括号或右括号，生成所有可能的括号组合。

终止条件：

当 current 的长度等于 2 * n（即每对括号对应两个字符，一个左括号和一个右括号），说明已经生成了一个有效的括号组合。将其加入 res 数组，并返回。
递归过程：

添加左括号： 如果当前的左括号数量小于 n，则可以继续添加左括号。
添加右括号： 只有当右括号数量小于左括号数量时，才能添加右括号，这样才能保证生成的括号组合始终有效。
返回结果： 最终返回存储所有有效括号组合的 res 数组。
 */
