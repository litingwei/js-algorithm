/**
 * 给你二叉树的根节点 root 和一个表示目标和的整数 targetSum 。判断该树中是否存在 根节点到叶子节点 的路径，这条路径上所有节点值相加等于目标和 targetSum 。如果存在，返回 true ；否则，返回 false 。

叶子节点 是指没有子节点的节点。
 */
/**
 * @param {treenode} root
 * @param {number} targetsum
 * @return {boolean}
 */
let haspathsum1 = function (root, targetsum) {
  // 递归法
  const traversal = (node, cnt) => {
    // 遇到叶子节点，并且计数为0
    if (cnt === 0 && !node.left && !node.right) return true
    // 遇到叶子节点而没有找到合适的边(计数不为0)，直接返回
    if (!node.left && !node.right) return false

    //  左（空节点不遍历）.遇到叶子节点返回true，则直接返回true
    if (node.left && traversal(node.left, cnt - node.left.val)) return true
    //  右（空节点不遍历）
    if (node.right && traversal(node.right, cnt - node.right.val)) return true
    return false
  }
  if (!root) return false
  return traversal(root, targetsum - root.val)

  // 精简代码:
  // if (!root) return false;
  // if (!root.left && !root.right && targetsum === root.val) return true;
  // return haspathsum(root.left, targetsum - root.val) || haspathsum(root.right, targetsum - root.val);
}

let hasPathSum = function (root, targetsum) {
  if (!root) return false
  const traversal = (node, cnt) => {
    if (!node.left && !node.right && cnt === 0) return true
    if (!node.left && !node.right) return false
    if (node.left) {
      cnt -= node.left.val
      if (traversal(node.left, cnt)) return true
      cnt += node.left.val
    }
    if (node.right) {
      cnt -= node.right.val
      if (traversal(node.right, cnt)) return true
      cnt += node.right.val
    }
    return false
  }
  return traversal(root, targetsum - root.val)
}

// 二叉树节点定义
function TreeNode(val, left, right) {
  this.val = val === undefined ? 0 : val
  this.left = left === undefined ? null : left
  this.right = right === undefined ? null : right
}

// 测试用例
function runTests() {
  // 测试用例 1
  const root1 = new TreeNode(
    5,
    new TreeNode(4, new TreeNode(11, new TreeNode(7), new TreeNode(2))),
    new TreeNode(8, new TreeNode(13), new TreeNode(4, null, new TreeNode(1)))
  )
  const targetSum1 = 22
  console.log(hasPathSum(root1, targetSum1)) // 输出 true

  // 测试用例 2
  const root2 = new TreeNode(1, new TreeNode(2), new TreeNode(3))
  const targetSum2 = 5
  console.log(hasPathSum(root2, targetSum2)) // 输出 false

  // 测试用例 3
  const root3 = null
  const targetSum3 = 0
  console.log(hasPathSum(root3, targetSum3)) // 输出 false

  // 测试用例 4
  const root4 = new TreeNode(1, new TreeNode(2))
  const targetSum4 = 1
  console.log(hasPathSum(root4, targetSum4)) // 输出 false
}

// 运行测试
runTests()
