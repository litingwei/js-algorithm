/**
 * 给你一棵二叉树的根节点 root ，翻转这棵二叉树，并返回其根节点。
 */
// 二叉树节点定义
function TreeNode(val, left, right) {
  this.val = val === undefined ? 0 : val
  this.left = left === undefined ? null : left
  this.right = right === undefined ? null : right
}

// 翻转二叉树函数
function invertTree(root) {
  // 步骤：检查根节点是否为空。
  // 解释：如果根节点为空，则树是空的，没有需要翻转的节点，因此返回 null。
  if (root === null) {
    return null
  }
  // 步骤：交换当前节点的左子树和右子树。
  // 解释：使用一个临时变量 temp 存储左子树，然后将右子树赋值给左子树，最后将临时变量 temp（原左子树）赋值给右子树。这一步实现了当前节点左右子树的交换。
  let temp = root.left
  root.left = root.right
  root.right = temp

  // 步骤：递归地翻转当前节点的左子树和右子树。
  // 解释：对当前节点的左子树和右子树分别进行递归调用。这将逐层向下处理，直到所有节点的左右子树都被交换。
  invertTree(root.left)
  invertTree(root.right)

  // 步骤：返回当前节点。
  // 解释：最终返回翻转后的根节点，以便上层递归调用能继续处理。最外层调用会返回整个翻转后的二叉树的根节点。
  return root
}

// 测试用例
function runTests() {
  const root1 = new TreeNode(
    4,
    new TreeNode(2, new TreeNode(1), new TreeNode(3)),
    new TreeNode(7, new TreeNode(6), new TreeNode(9))
  )
  console.log(invertTree(root1)) // 输出翻转后的二叉树

  const root2 = new TreeNode(1, new TreeNode(2), new TreeNode(3))
  console.log(invertTree(root2)) // 输出翻转后的二叉树

  const root3 = null
  console.log(invertTree(root3)) // 输出 null

  const root4 = new TreeNode(1)
  console.log(invertTree(root4)) // 输出翻转后的单节点二叉树
}

// 运行测试
runTests()
