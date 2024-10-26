/**
 * 给你一棵二叉树的根节点 root ，翻转这棵二叉树，并返回其根节点。
 */
// 二叉树节点定义
function TreeNode(val, left, right) {
  this.val = val === undefined ? 0 : val
  this.left = left === undefined ? null : left
  this.right = right === undefined ? null : right
}

/**
 * 方法2：迭代方式翻转二叉树（使用队列）
 * @param {TreeNode} root - 二叉树的根节点
 * @return {TreeNode} - 返回翻转后的根节点
 */
function invertTreeIterative(root) {
  if (!root) return null

  // 使用队列进行层序遍历
  const queue = [root]

  while (queue.length > 0) {
    // 获取当前节点
    const current = queue.shift()

    // 交换当前节点的左右子树
    const temp = current.left
    current.left = current.right
    current.right = temp

    // 将左右子节点加入队列
    if (current.left) queue.push(current.left)
    if (current.right) queue.push(current.right)
  }

  return root
}
