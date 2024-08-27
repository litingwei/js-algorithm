/**
 * 给你一个 无重复元素 的整数数组 candidates 和一个目标整数 target ，找出 candidates 中可以使数字和为目标数 target 的 所有 不同组合 ，并以列表形式返回。你可以按 任意顺序 返回这些组合。

candidates 中的 同一个 数字可以 无限制重复被选取 。如果至少一个数字的被选数量不同，则两种组合是不同的。 

对于给定的输入，保证和为 target 的不同组合数少于 150 个。
 */
/**
 * 这个问题是一个经典的「组合总和」问题，可以使用 回溯算法 来解决。回溯算法能够有效地生成所有可能的组合，同时利用剪枝技术来减少不必要的计算。

解题思路
排序数组：首先将 candidates 排序，以便在回溯过程中进行剪枝操作。

回溯搜索：

在每一步，尝试将一个候选数加入当前组合。
如果当前组合的和等于目标值 target，则将当前组合加入结果集。
如果当前组合的和超过了 target，则停止进一步的探索（剪枝）。
递归过程中，允许重复选择相同的数字，但要确保组合中的数字顺序一致，避免重复组合。
剪枝优化：由于数组是有序的，一旦发现当前组合的和超过了目标值，后续的数字不需要再考虑，从而减少不必要的递归。
 */
var combinationSum = function (candidates, target) {
  const res = []

  const backtrack = (start, path, sum) => {
    if (sum === target) {
      res.push([...path])
      return
    }

    if (sum > target) return // 剪枝操作

    for (let i = start; i < candidates.length; i++) {
      path.push(candidates[i])
      backtrack(i, path, sum + candidates[i])
      path.pop() // 撤销选择
    }
  }

  backtrack(0, [], 0)
  return res
}
/**
 * 代码解释
递归函数 backtrack：

start：表示当前选择数字在 candidates 数组中的起始位置，确保每次选择的数字要么是当前数字要么是后续数字，避免重复。
path：表示当前组合的路径。
sum：表示当前路径的数字和。
递归逻辑：

当 sum === target，将当前路径 path 复制并加入结果集 res。
如果 sum > target，则直接返回，剪枝操作。
否则，从 start 开始遍历 candidates，对每个数字进行选择并进入下一层递归。
撤销选择：

在每次递归返回后，需要撤销最后一次选择的数字 path.pop()，以便尝试其他组合。
 */
console.log(combinationSum([2, 3, 6, 7], 7)) // 预期输出: [[2,2,3],[7]]
console.log(combinationSum([2, 3, 5], 8)) // 预期输出: [[2,2,2,2],[2,3,3],[3,5]]
console.log(combinationSum([2], 1)) // 预期输出: []
