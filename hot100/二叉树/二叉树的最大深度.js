/**给定一个二叉树 root ，返回其最大深度。

二叉树的 最大深度 是指从根节点到最远叶子节点的最长路径上的节点数。 */
var maxDepth = function (root) {
  // 定义递归函数，计算树的深度
  function depth(node) {
    if (node === null) {
      return 0
    }
    // 递归计算左子树的深度
    const leftDepth = depth(node.left)
    // 递归计算右子树的深度
    const rightDepth = depth(node.right)
    // 当前节点的深度为左右子树深度的最大值加1
    return Math.max(leftDepth, rightDepth) + 1
  }
  // 从根节点开始计算树的深度
  return depth(root)
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
    3,
    new TreeNode(9),
    new TreeNode(20, new TreeNode(15), new TreeNode(7))
  )
  console.log(maxDepth(root1)) // 输出 3

  // 测试用例 2
  const root2 = new TreeNode(1, null, new TreeNode(2))
  console.log(maxDepth(root2)) // 输出 2

  // 测试用例 3
  const root3 = null
  console.log(maxDepth(root3)) // 输出 0

  // 测试用例 4
  const root4 = new TreeNode(1)
  console.log(maxDepth(root4)) // 输出 1
}

// 运行测试
runTests()
