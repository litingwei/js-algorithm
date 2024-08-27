/**
 * 给定一个二叉树的 根节点 root，请找出该二叉树的 最底层 最左边 节点的值。

假设二叉树中至少有一个节点。
 */

// 递归
var findBottomLeftValue = function (root) {
  //首先考虑递归遍历 前序遍历 找到最大深度的叶子节点即可
  let maxPath = 0,
    resNode = null
  // 1. 确定递归函数的函数参数
  const dfsTree = function (node, curPath) {
    // 2. 确定递归函数终止条件
    if (node.left === null && node.right === null) {
      if (curPath > maxPath) {
        maxPath = curPath
        resNode = node.val
      }
    }
    node.left && dfsTree(node.left, curPath + 1)
    node.right && dfsTree(node.right, curPath + 1)
  }
  dfsTree(root, 1)
  return resNode
}

// 层序遍历
var findBottomLeftValue = function (root) {
  const queue = [root]
  let nodeRes
  while (queue.length) {
    let size = queue.length
    let originSize = queue.length
    while (size--) {
      const node = queue.shift()
      if (originSize - 1 == size) nodeRes = node.val
      if (node.left) queue.push(node.left)
      if (node.right) queue.push(node.right)
    }
  }
  return nodeRes
}
