/**
 * 给定一个仅包含数字 2-9 的字符串，返回所有它能表示的字母组合。答案可以按 任意顺序 返回。

给出数字到字母的映射如下（与电话按键相同）。注意 1 不对应任何字母。
 */
/**代码解释
数字到字母映射：

使用一个对象 phone 存储数字到字母的映射。
回溯函数：

backtrack(index, path) 是回溯函数，用于递归生成所有可能的字母组合。
参数 index 表示当前处理的数字索引，path 是当前生成的字母组合。
如果 index 等于输入字符串的长度，表示已经生成了一种完整的组合，将其加入结果数组 res 中。
否则，获取当前数字对应的字母，然后通过循环将每个字母加入当前路径，并递归处理下一个数字。
返回结果：

最后，返回 res，即所有可能的字母组合。*/
var letterCombinations = function (digits) {
  if (digits.length === 0) return []

  const phone = {
    2: 'abc',
    3: 'def',
    4: 'ghi',
    5: 'jkl',
    6: 'mno',
    7: 'pqrs',
    8: 'tuv',
    9: 'wxyz',
  }

  const res = []

  const backtrack = (index, path) => {
    if (index === digits.length) {
      res.push(path)
      return
    }

    const letters = phone[digits[index]]
    for (let letter of letters) {
      backtrack(index + 1, path + letter)
    }
  }

  backtrack(0, '')
  return res
}
console.log(letterCombinations('23')) // 预期输出: ["ad","ae","af","bd","be","bf","cd","ce","cf"]
console.log(letterCombinations('')) // 预期输出: []
console.log(letterCombinations('2')) // 预期输出: ["a","b","c"]
