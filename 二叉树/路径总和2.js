/**
 * 给你二叉树的根节点 root 和一个整数目标和 targetSum ，找出所有 从根节点到叶子节点 路径总和等于给定目标和的路径。

叶子节点 是指没有子节点的节点。
 */
var pathSum = function (root, targetSum) {
  const result = []

  function dfs(node, currentPath, currentSum) {
    if (!node) return

    // 将当前节点的值添加到路径中，并更新路径和
    currentPath.push(node.val)
    currentSum += node.val

    // 如果当前节点是叶子节点并且路径和等于目标和，将路径添加到结果中
    if (!node.left && !node.right && currentSum === targetSum) {
      result.push([...currentPath])
    }

    // 递归遍历左子节点和右子节点
    dfs(node.left, currentPath, currentSum)
    dfs(node.right, currentPath, currentSum)

    // 回溯：移除当前节点的值
    currentPath.pop()
  }

  // 从根节点开始递归
  dfs(root, [], 0)

  return result
}

// 二叉树节点定义
function TreeNode(val, left, right) {
  this.val = val === undefined ? 0 : val
  this.left = left === undefined ? null : left
  this.right = right === undefined ? null : right
}

// 测试用例
function runTests() {
  // 测试用例 1
  const root1 = new TreeNode(
    5,
    new TreeNode(4, new TreeNode(11, new TreeNode(7), new TreeNode(2))),
    new TreeNode(8, new TreeNode(13), new TreeNode(4, null, new TreeNode(5)))
  )
  const targetSum1 = 22
  console.log(pathSum(root1, targetSum1)) // 输出 [[5,4,11,2], [5,8,4,5]]

  // 测试用例 2
  const root2 = new TreeNode(1, new TreeNode(2), new TreeNode(3))
  const targetSum2 = 5
  console.log(pathSum(root2, targetSum2)) // 输出 []

  // 测试用例 3
  const root3 = null
  const targetSum3 = 0
  console.log(pathSum(root3, targetSum3)) // 输出 []

  // 测试用例 4
  const root4 = new TreeNode(1, new TreeNode(2))
  const targetSum4 = 1
  console.log(pathSum(root4, targetSum4)) // 输出 []
}

// 运行测试
runTests()
