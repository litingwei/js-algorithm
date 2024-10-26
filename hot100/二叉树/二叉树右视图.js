/**
 * 给定一个二叉树的 根节点 root，想象自己站在它的右侧，按照从顶部到底部的顺序，返回从右侧所能看到的节点值。

 */
/**
 * 先了解二叉树的层序遍历
 */
/**
 * 
在处理每一层时，记录该层的最后一个节点
时间复杂度：O(n)，其中n是节点数
空间复杂度：O(w)，其中w是树的最大宽度} root 
 */
function rightSideView_BFS(root) {
  if (!root) return []

  const result = []
  const queue = [root]

  while (queue.length > 0) {
    const levelSize = queue.length

    // 遍历当前层的所有节点
    for (let i = 0; i < levelSize; i++) {
      const node = queue.shift()

      // 如果是当前层的最后一个节点，将其加入结果数组
      if (i === levelSize - 1) {
        result.push(node.val)
      }

      // 将下一层的节点加入队列
      if (node.left) queue.push(node.left)
      if (node.right) queue.push(node.right)
    }
  }

  return result
}
