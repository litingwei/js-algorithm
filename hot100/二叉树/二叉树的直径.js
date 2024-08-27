/**
 * 给你一棵二叉树的根节点，返回该树的 直径 。

二叉树的 直径 是指树中任意两个节点之间最长路径的 长度 。这条路径可能经过也可能不经过根节点 root 。

两节点之间路径的 长度 由它们之间边数表示。
 */
var diameterOfBinaryTree = function (root) {
  let diameter = 0

  const depth = (node) => {
    if (!node) return 0

    const leftDepth = depth(node.left)
    const rightDepth = depth(node.right)

    // 更新直径（经过当前节点的路径长度）
    diameter = Math.max(diameter, leftDepth + rightDepth)

    // 返回当前节点的最大深度
    return Math.max(leftDepth, rightDepth) + 1
  }

  depth(root)
  return diameter
}
function TreeNode(val, left = null, right = null) {
  this.val = val
  this.left = left
  this.right = right
}

function runTests() {
  const root = new TreeNode(1)
  root.left = new TreeNode(2)
  root.right = new TreeNode(3)
  root.left.left = new TreeNode(4)
  root.left.right = new TreeNode(5)

  console.log(diameterOfBinaryTree(root)) // 预期输出是 3，最长路径为 4 -> 2 -> 1 -> 3
}

runTests()

/**
 * 代码解释
变量 diameter：

用于存储二叉树的最大直径。
递归函数 depth(node)：

Base Case：如果当前节点为 null，返回深度为 0。
递归调用：
计算左子树的深度 leftDepth。
计算右子树的深度 rightDepth。
更新直径：
通过 diameter = Math.max(diameter, leftDepth + rightDepth) 更新全局的直径值。
返回深度：
当前节点的最大深度等于左右子树深度的最大值加1。
调用递归：

从根节点开始递归调用 depth(root)。
最终返回 diameter
 */
