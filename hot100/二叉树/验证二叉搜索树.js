/**
 * 给你一个二叉树的根节点 root ，判断其是否是一个有效的二叉搜索树。

有效 二叉搜索树定义如下：

节点的左
子树
只包含 小于 当前节点的数。
节点的右子树只包含 大于 当前节点的数。
所有左子树和右子树自身必须也是二叉搜索树。
 */
var isValidBST = function (root) {
  // 辅助函数，判断以节点为根的子树是否为有效BST
  const validate = (node, low, high) => {
    if (!node) return true // 空节点是有效的BST

    // 当前节点值必须在 (low, high) 范围内
    if (node.val <= low || node.val >= high) return false

    // 递归检查左右子树
    return (
      validate(node.left, low, node.val) && validate(node.right, node.val, high)
    )
  }

  // 初始范围为负无穷到正无穷
  return validate(root, -Infinity, Infinity)
}

/**
 * 代码解释
辅助函数 validate(node, low, high)：

node 是当前节点。
low 和 high 是当前节点值的允许范围。
如果 node.val 不在 (low, high) 范围内，返回 false。
递归检查左子树，要求左子树的所有节点值在 (low, node.val) 范围内。
递归检查右子树，要求右子树的所有节点值在 (node.val, high) 范围内。
初始调用：

对整个树进行检查，初始时根节点的允许值范围是 (-Infinity, Infinity)。
 */
