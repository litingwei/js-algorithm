/**
 * 给定一个二叉搜索树的根节点 root ，和一个整数 k ，请你设计一个算法查找其中第 k 小的元素（从 1 开始计数）。
 */
/**
 * 
解题思路
中序遍历：

中序遍历二叉搜索树时，节点值会按升序排列。
我们只需要遍历到第 k 个节点并返回该节点的值即可。
剪枝优化：

在遍历的过程中，如果已经找到第 k 个元素，就可以提前终止遍历，避免不必要的计算。
 */
var kthSmallest = function (root, k) {
  let count = 0 // 用于计数当前访问的节点数
  let result = null // 用于存储第 k 小的节点值

  const inorderTraversal = (node) => {
    if (!node || result !== null) return // 如果节点为空或已经找到结果，停止递归

    inorderTraversal(node.left) // 递归左子树

    count += 1 // 访问当前节点，计数加一
    if (count === k) {
      result = node.val // 找到第 k 小的节点
      return
    }

    inorderTraversal(node.right) // 递归右子树
  }

  inorderTraversal(root) // 开始中序遍历
  return result // 返回结果
}
