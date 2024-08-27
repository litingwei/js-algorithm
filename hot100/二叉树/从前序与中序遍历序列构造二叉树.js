/**
 * 给定两个整数数组 preorder 和 inorder ，其中 preorder 是二叉树的先序遍历， inorder 是同一棵树的中序遍历，请构造二叉树并返回其根节点。
 */
function TreeNode(val, left = null, right = null) {
  this.val = val
  this.left = left
  this.right = right
}

var buildTree = function (preorder, inorder) {
  if (!preorder.length || !inorder.length) return null

  // 先序遍历的第一个元素是根节点
  const rootVal = preorder[0]
  const root = new TreeNode(rootVal)

  // 在中序遍历中找到根节点的位置
  const index = inorder.indexOf(rootVal)

  // 递归构建左子树和右子树
  const inorderLeft = inorder.slice(0, index)
  const inorderRight = inorder.slice(index + 1)
  const preorderLeft = preorder.slice(1, index + 1)
  const preorderRight = preorder.slice(index + 1)
  root.left = buildTree(preorderLeft, inorderLeft)
  root.right = buildTree(preorderRight, inorderRight)

  return root
}

// 测试用例
function runTests() {
  // 测试用例 1
  const preorder1 = [3, 9, 20, 15, 7]
  const inorder1 = [9, 3, 15, 20, 7]
  const tree1 = buildTree(preorder1, inorder1)
  console.log(tree1) // 输出构建的二叉树结构

  // 测试用例 2
  const preorder2 = [1, 2, 3]
  const inorder2 = [2, 1, 3]
  const tree2 = buildTree(preorder2, inorder2)
  console.log(tree2) // 输出构建的二叉树结构

  // 测试用例 3
  const preorder3 = [1]
  const inorder3 = [1]
  const tree3 = buildTree(preorder3, inorder3)
  console.log(tree3) // 输出构建的二叉树结构
}

// 运行测试
runTests()
