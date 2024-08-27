/**
 * 给你一个整数数组 nums ，数组中的元素 互不相同 。返回该数组所有可能的
子集
（幂集）。

解集 不能 包含重复的子集。你可以按 任意顺序 返回解集。
 */
var subsets = function (nums) {
  let result = [] // 用来存放所有的子集
  let path = [] // 用来存放当前的子集路径
  let len = nums.length // 数组的长度

  function backtrack(startIndex) {
    result.push(path.slice()) // 将当前的子集路径复制并加入结果集
    if (startIndex >= len) return // 如果起始索引超出数组长度，则结束递归

    // 从起始索引开始遍历数组
    for (let i = startIndex; i < len; i++) {
      path.push(nums[i]) // 将当前元素加入子集路径
      backtrack(i + 1) // 递归调用，将索引移动到下一个位置
      path.pop() // 回溯，移除最后一个元素以便尝试下一个可能的解
    }
  }

  backtrack(0) // 从索引0开始
  return result // 返回最终的所有子集
}

console.log(subsets([1, 2, 3]))
// 预期输出: [[],[1],[2],[1,2],[3],[1,3],[2,3],[1,2,3]]

console.log(subsets([0]))
// 预期输出: [[],[0]]

/**
 * 解释：
初始化结果和路径： result 用于存储所有可能的子集，path 用于记录当前构造的子集。
递归函数 backtrack： 它接受一个 startIndex 参数，表示当前递归的起始位置。
递归生成子集： 每次递归调用时，当前路径 path 的一个副本被添加到结果集中，然后依次添加后续元素进行新的递归，直到 startIndex 超出数组长度。
回溯： 在每次递归后移除路径中的最后一个元素，这样可以重新尝试下一个可能的子集组合。
结果： 最终返回所有可能的子集。
 */
