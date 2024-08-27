/**
 * 给定一个不含重复数字的数组 nums ，返回其 所有可能的全排列 。你可以 按任意顺序 返回答案。
 *
 * 输入：nums = [1,2,3]
 * 输出：[[1,2,3],[1,3,2],[2,1,3],[2,3,1],[3,1,2],[3,2,1]]
 */
/**
 * 
解释：
初始化结果集和路径： result 存放所有生成的全排列，path 用于记录当前构造的排列路径，used 数组用于标记数组中的元素是否已在当前排列中使用。

递归生成排列：

当 path 的长度等于 nums 的长度时，表示生成了一个完整的排列，将其添加到 result 中。
对于每个元素，如果它未被使用，则将其添加到 path 中，并标记为已使用，然后递归调用生成下一个元素的排列。
在递归结束后，回溯到前一个状态，移除当前元素，并将其标记为未使用。
回溯： 通过回溯可以探索每一种可能的排列组合，确保不会遗漏任何排列。


 */
var permute = function (nums) {
  let result = [] // 用于存放所有的全排列
  let path = [] // 用于存放当前的排列路径
  let used = Array(nums.length).fill(false) // 用于记录每个元素是否已在当前排列中使用

  function backtrack() {
    if (path.length === nums.length) {
      // 当路径长度等于数组长度时，生成一个完整的排列
      result.push(path.slice()) // 将当前排列的副本加入结果集中
      return
    }

    for (let i = 0; i < nums.length; i++) {
      if (used[i]) continue // 如果当前元素已经使用，则跳过
      path.push(nums[i]) // 将当前元素加入排列路径
      used[i] = true // 标记当前元素为已使用
      backtrack() // 递归调用，继续生成下一个元素的排列
      path.pop() // 回溯，移除当前元素
      used[i] = false // 将当前元素标记为未使用
    }
  }

  backtrack() // 从空路径开始生成排列
  return result // 返回所有可能的全排列
}
