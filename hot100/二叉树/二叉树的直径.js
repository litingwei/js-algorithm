/**
 * 给你一棵二叉树的根节点，返回该树的 直径 。

二叉树的 直径 是指树中任意两个节点之间最长路径的 长度 。这条路径可能经过也可能不经过根节点 root 。

两节点之间路径的 长度 由它们之间边数表示。
 */

// 二叉树节点的定义
class TreeNode {
  constructor(val = 0, left = null, right = null) {
    this.val = val
    this.left = left
    this.right = right
  }
}

/**
 * @param {TreeNode} root
 * @return {number}
 */
function diameterOfBinaryTree(root) {
  // 记录最大直径
  let maxDiameter = 0

  // 计算以某个节点为根的子树的最大深度
  function maxDepth(node) {
    // 基础情况：空节点
    if (!node) return 0

    // 递归计算左右子树的最大深度
    const leftDepth = maxDepth(node.left)
    const rightDepth = maxDepth(node.right)

    // 更新最大直径
    // 当前节点的直径 = 左子树深度 + 右子树深度
    maxDiameter = Math.max(maxDiameter, leftDepth + rightDepth)

    // 返回以当前节点为根的子树的最大深度
    return Math.max(leftDepth, rightDepth) + 1
  }

  maxDepth(root)
  return maxDiameter
}

// 测试用例
function test() {
  // 构建测试树
  //     1
  //    / \
  //   2   3
  //  / \
  // 4   5
  const root = new TreeNode(1)
  root.left = new TreeNode(2)
  root.right = new TreeNode(3)
  root.left.left = new TreeNode(4)
  root.left.right = new TreeNode(5)

  console.log('Expected diameter: 3')
  console.log('Actual diameter:', diameterOfBinaryTree(root))

  // 测试用例2：单节点树
  const root2 = new TreeNode(1)
  console.log('\nSingle node tree diameter:', diameterOfBinaryTree(root2))

  // 测试用例3：空树
  console.log('\nEmpty tree diameter:', diameterOfBinaryTree(null))
}

test()

/** 
这个解决方案的核心思路是：
1. 树的直径是所有节点的左右子树深度之和的最大值
2. 使用后序遍历（自底向上）的方式计算每个节点的情况
3. 在遍历过程中维护一个全局的最大直径变量

代码的主要特点：
1. 使用了深度优先搜索(DFS)
2. 时间复杂度为O(n)，其中n是节点数量
3. 空间复杂度为O(h)，其中h是树的高度（递归调用栈的深度）

解决方案中包含了多个测试用例：
1. 一个标准的二叉树，预期直径为3
2. 单节点树，预期直径为0
3. 空树，预期直径为0

需要注意的是：
- 直径的定义是最长路径的边数，不是节点数
- 最长路径可能不经过根节点
- 需要考虑空树和单节点树的特殊情况

*/
