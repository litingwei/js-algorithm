/**
 * 给定一个二叉树的根节点 root ，和一个整数 targetSum ，求该二叉树里节点值之和等于 targetSum 的 路径 的数目。

路径 不需要从根节点开始，也不需要在叶子节点结束，但是路径方向必须是向下的（只能从父节点到子节点）。
 */
/**
 * 
要计算二叉树中所有路径和等于给定目标和 targetSum 的路径数量，可以使用深度优先搜索（DFS）结合前缀和（Prefix Sum）的方法。这种方法的核心思想是通过记录遍历过程中所有节点的前缀和，来快速计算某一段路径和是否等于目标和。

实现步骤
使用哈希表 prefixSumCount 来记录从根节点到当前节点的路径上所有前缀和出现的次数。
递归遍历二叉树，计算从根节点到当前节点的前缀和，并检查是否存在一个前缀和，使得当前前缀和减去这个前缀和等于目标和。
在递归过程中更新和恢复哈希表中的前缀和次数，以确保只统计从根节点到当前节点的路径。
 */
var pathSum = function (root, targetSum) {
  // 哈希表记录前缀和及其出现次数
  const prefixSumCount = new Map()
  // 初始化前缀和0出现1次，表示路径从根节点开始的情况
  prefixSumCount.set(0, 1)

  // 深度优先搜索辅助函数
  function dfs(node, currSum) {
    if (!node) return 0

    // 当前路径和
    currSum += node.val

    // 当前路径和减去目标和，得到需要的前缀和
    const target = currSum - targetSum
    // 查找当前路径中存在的满足条件的前缀和的次数
    let count = prefixSumCount.get(target) || 0

    // 更新当前路径和的前缀和次数
    prefixSumCount.set(currSum, (prefixSumCount.get(currSum) || 0) + 1)

    // 递归遍历左子树和右子树
    count += dfs(node.left, currSum)
    count += dfs(node.right, currSum)

    // 恢复前缀和次数，回溯
    prefixSumCount.set(currSum, prefixSumCount.get(currSum) - 1)

    return count
  }

  // 从根节点开始遍历
  return dfs(root, 0)
}

function TreeNode(val, left, right) {
  this.val = val === undefined ? 0 : val
  this.left = left === undefined ? null : left
  this.right = right === undefined ? null : right
}

// 测试用例
const root1 = new TreeNode(
  10,
  new TreeNode(
    5,
    new TreeNode(3, new TreeNode(3), new TreeNode(-2)),
    new TreeNode(2, null, new TreeNode(1))
  ),
  new TreeNode(-3, null, new TreeNode(11))
)
const targetSum1 = 8
console.log(pathSum(root1, targetSum1)) // 输出 3

const root2 = new TreeNode(1)
const targetSum2 = 1
console.log(pathSum(root2, targetSum2)) // 输出 1
