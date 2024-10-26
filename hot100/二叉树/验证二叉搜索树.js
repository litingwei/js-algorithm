/**
 * 给你一个二叉树的根节点 root ，判断其是否是一个有效的二叉搜索树。

有效 二叉搜索树定义如下：

节点的左
子树
只包含 小于 当前节点的数。
节点的右子树只包含 大于 当前节点的数。
所有左子树和右子树自身必须也是二叉搜索树。
 */
/**
 * 我来帮你实现一个判断二叉搜索树(BST)有效性的 JavaScript 函数。这个问题需要注意以下几点：
 * 1. 不仅要比较节点和其直接子节点的值，还要确保左子树的所有节点都小于当前节点，右子树的所有节点都大于当前节点
 * 2. 需要记录每个子树节点值的有效范围
 * 3. 可以使用递归来解决这个问题
 */

/**
 * 二叉树节点的定义
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */

/**
 * @param {TreeNode} root
 * @return {boolean}
 */
function isValidBST(root) {
  // 辅助函数，用于验证节点值是否在有效范围内
  function validate(node, min, max) {
    // 空节点认为是有效的BST
    if (node === null) {
      return true
    }

    // 检查当前节点值是否在有效范围内
    if (node.val <= min || node.val >= max) {
      return false
    }

    // 递归验证左右子树
    // 左子树的所有节点值必须小于当前节点值
    // 右子树的所有节点值必须大于当前节点值
    return (
      validate(node.left, min, node.val) && validate(node.right, node.val, max)
    )
  }

  // 初始调用时使用 JavaScript 能表示的最小和最大数
  return validate(root, -Infinity, Infinity)
}

// 测试用例
function TreeNode(val, left, right) {
  this.val = val === undefined ? 0 : val
  this.left = left === undefined ? null : left
  this.right = right === undefined ? null : right
}

// 测试用例1: 有效的BST
//     2
//    / \
//   1   3
const validBST = new TreeNode(2)
validBST.left = new TreeNode(1)
validBST.right = new TreeNode(3)
console.log('Test case 1:', isValidBST(validBST)) // 应该输出 true

// 测试用例2: 无效的BST
//     5
//    / \
//   1   4
//      / \
//     3   6
const invalidBST = new TreeNode(5)
invalidBST.left = new TreeNode(1)
invalidBST.right = new TreeNode(4)
invalidBST.right.left = new TreeNode(3)
invalidBST.right.right = new TreeNode(6)
console.log('Test case 2:', isValidBST(invalidBST)) // 应该输出 false

/**
 * 这个实现的主要思路是：
 * 1. 使用递归方法，对每个节点维护一个有效值的范围（最小值和最大值）
 * 2. 对于左子树，最大值更新为当前节点的值
 * 3. 对于右子树，最小值更新为当前节点的值
 * 4. 如果任何节点的值不在其有效范围内，则返回 false
 * 5. 空节点被认为是有效的 BST
 *
 *   算法的时间复杂度是 O(n)，其中 n 是树中的节点数，因为我们需要访问每个节点一次。空间复杂度是 O(h)，其中 h 是树的高度，这是由于递归调用栈的深度。
 *
 * 你可以直接运行代码来测试不同的用例。需要帮助理解具体的步骤或者测试其他情况吗？
 */
