/**
 * 给定一个二叉树，编写一个函数来计算这个树的最大宽度。树的宽度是所有层中的最大宽度。这个二叉树与满二叉树结构相同，但一些节点为空。
 *
 * 宽度定义为两个端点（左节点和右节点）之间的最长路径长度。每个层上最左和最右的非空节点之间的距离定义为该层的宽度。
 *
 * 示例 1:
 * 输入:
 *
 *           1
 *          / \
 *         3   2
 *        / \   \
 *       5   3   9
 *
 * 输出: 4
 * 解释: 最大宽度出现在第 3 层，宽度为 4 (5,3,null,9)。
 *
 * 示例 2:
 * 输入:
 */
/**解题思路：
层序遍历：使用队列实现 BFS 对树进行层序遍历。
编号：为每个节点按层次进行编号，例如：根节点编号为 1，左子节点的编号为 2 * parent，右子节点的编号为 2 * parent + 1。
计算宽度：每层的宽度就是该层最右节点的编号减去最左节点的编号再加 1。
实现步骤：
如果树为空，返回宽度 0。
初始化一个队列，存储每个节点及其对应的编号。
逐层遍历二叉树，每次记录最左和最右的编号差，更新最大宽度。
返回最大宽度。 */
// 二叉树的节点定义
class TreeNode {
  constructor(val = 0, left = null, right = null) {
    this.val = val
    this.left = left
    this.right = right
  }
}
var widthOfBinaryTree = function (root) {
  if (!root) return 0 // 确保当根节点为空时，返回0，而不是null

  let maxWidth = 0
  let queue = [[root, 0]]

  while (queue.length > 0) {
    const levelLength = queue.length
    const start = queue[0][1]
    let end = start

    for (let i = 0; i < levelLength; i++) {
      const [node, index] = queue.shift()
      end = index
      if (node.left) queue.push([node.left, 2 * (index - start)])
      if (node.right) queue.push([node.right, 2 * (index - start) + 1])
    }
    maxWidth = Math.max(maxWidth, end - start + 1)
  }

  return maxWidth // 确保返回整数
}

// 测试用例
const root = new TreeNode(1)
root.left = new TreeNode(3)
root.right = new TreeNode(2)
root.left.left = new TreeNode(5)
root.left.right = new TreeNode(3)
root.right.right = new TreeNode(9)

console.log(widthOfBinaryTree(root)) // 输出 4
