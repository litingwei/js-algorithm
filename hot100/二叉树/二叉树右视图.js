/**
 * 给定一个二叉树的 根节点 root，想象自己站在它的右侧，按照从顶部到底部的顺序，返回从右侧所能看到的节点值。

 */
/**
 * 先了解二叉树的层序遍历
 */
var rightSideView = function (root) {
  if (!root) return []
  const queue = [root]
  const res = []
  while (queue.length) {
    let size = queue.length
    // size长度为0的时候表明到了层级最后一个节点
    while (size--) {
      const node = queue.shift()
      if (size == 0) res.push(node.val)
      if (node.left) queue.push(node.left)
      if (node.right) queue.push(node.right)
    }
  }
  return res
}
