/**
 * 给你二叉树的根节点 root ，返回其节点值的 层序遍历 。 （即逐层地，从左到右访问所有节点）。
 */
var levelOrder = function (root) {
  // 如果根节点为空，返回空数组
  if (!root) return []

  const res = [] // 用于存储最终的层序遍历结果
  const queue = [root] // 初始化队列，将根节点入队

  // 当队列不为空时，继续遍历
  while (queue.length) {
    let size = queue.length // 当前层的节点数
    const temp = [] // 用于存储当前层的节点值

    // 遍历当前层的所有节点
    while (size--) {
      const node = queue.shift() // 取出队列头部的节点
      temp.push(node.val) // 将该节点的值加入当前层的结果中

      // 如果左子节点存在，将其加入队列
      if (node.left) queue.push(node.left)

      // 如果右子节点存在，将其加入队列
      if (node.right) queue.push(node.right)
    }

    // 将当前层的结果加入最终结果中
    res.push(temp)
  }

  return res // 返回最终的层序遍历结果
}

function TreeNode(val, left, right) {
  this.val = val === undefined ? 0 : val
  this.left = left === undefined ? null : left
  this.right = right === undefined ? null : right
}

const root1 = new TreeNode(1, new TreeNode(2), new TreeNode(3))
console.log(levelOrder(root1)) // [[1], [2, 3]]

const root2 = new TreeNode(
  1,
  new TreeNode(2, new TreeNode(4), new TreeNode(5)),
  new TreeNode(3)
)
console.log(levelOrder(root2)) // [[1], [2, 3], [4, 5]]

const root3 = null
console.log(levelOrder(root3)) // []

const root4 = new TreeNode(1)
console.log(levelOrder(root4)) // [[1]]

const root5 = new TreeNode(
  1,
  new TreeNode(2, new TreeNode(4)),
  new TreeNode(3, null, new TreeNode(5))
)
console.log(levelOrder(root5)) // [[1], [2, 3], [4, 5]]
