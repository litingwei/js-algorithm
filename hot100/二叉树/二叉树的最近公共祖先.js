/*给定一个二叉树, 找到该树中两个指定节点的最近公共祖先。

百度百科中最近公共祖先的定义为：“对于有根树 T 的两个节点 p、q，最近公共祖先表示为一个节点 x，满足 x 是 p、q 的祖先且 x 的深度尽可能大（一个节点也可以是它自己的祖先）。”

*/
function TreeNode(val, left = null, right = null) {
  this.val = val
  this.left = left
  this.right = right
}

var lowestCommonAncestor = function (root, p, q) {
  if (!root) return null
  if (root === p || root === q) return root

  // 递归查找左子树和右子树
  let left = lowestCommonAncestor(root.left, p, q)
  let right = lowestCommonAncestor(root.right, p, q)

  // 如果在左右子树中分别找到了p和q，说明当前节点是最近公共祖先
  if (left && right) return root

  // 否则返回非空的子树节点
  return left ? left : right
}

function runTests() {
  // 构造二叉树
  let root = new TreeNode(3)
  root.left = new TreeNode(5)
  root.right = new TreeNode(1)
  root.left.left = new TreeNode(6)
  root.left.right = new TreeNode(2)
  root.right.left = new TreeNode(0)
  root.right.right = new TreeNode(8)
  root.left.right.left = new TreeNode(7)
  root.left.right.right = new TreeNode(4)

  let p = root.left // 节点5
  let q = root.left.right.right // 节点4

  // 查找最近公共祖先
  let lca = lowestCommonAncestor(root, p, q)
  console.log(lca.val) // 输出5，因为5是节点5和4的最近公共祖先
}
/*
      3
     / \
    5   1
   / \ / \
  6  2 0  8
    / \
   7   4
*/

// 运行测试
runTests()
