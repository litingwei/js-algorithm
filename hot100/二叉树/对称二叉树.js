/**
 * 给你一个二叉树的根节点 root ， 检查它是否轴对称。
 */
var isSymmetric = function (root) {
  // 定义一个递归函数 compare，用于比较两个子树是否对称
  function compare(left, right) {
    // 如果左子树和右子树都为空，表示对称
    if (!left && !right) return true
    // 如果左子树为空但右子树不为空，表示不对称
    if (!left && right) return false
    // 如果左子树不为空但右子树为空，表示不对称
    if (left && !right) return false
    // 如果左子树和右子树的值不相等，表示不对称
    if (left.val !== right.val) return false
    // 递归比较左子树的左子树和右子树的右子树
    // 以及左子树的右子树和右子树的左子树
    return compare(left.left, right.right) && compare(left.right, right.left)
  }
  // 调用 compare 函数比较根节点的左子树和右子树是否对称
  return compare(root.left, root.right)
}

// 二叉树节点定义
function TreeNode(val, left, right) {
  this.val = val === undefined ? 0 : val
  this.left = left === undefined ? null : left
  this.right = right === undefined ? null : right
}

// 测试用例
function runTests() {
  // 对称二叉树
  const root1 = new TreeNode(
    1,
    new TreeNode(2, new TreeNode(3), new TreeNode(4)),
    new TreeNode(2, new TreeNode(4), new TreeNode(3))
  )
  console.log(isSymmetric(root1)) // true

  // 非对称二叉树
  const root2 = new TreeNode(
    1,
    new TreeNode(2, null, new TreeNode(3)),
    new TreeNode(2, null, new TreeNode(3))
  )
  console.log(isSymmetric(root2)) // false

  // 空树
  const root3 = null
  console.log(isSymmetric(root3)) // true

  // 单节点树
  const root4 = new TreeNode(1)
  console.log(isSymmetric(root4)) // true
}

// 运行测试
runTests()

/**
 * 迭代法判断对称二叉树
 */
var isSymmetric2 = function (root) {
  if (!root) return false
  const queue = []
  queue.push(root.left)
  queue.push(root.right)
  while (queue.length) {
    const left = queue.shift()
    const right = queue.shift()
    if (!left && !right) continue
    if (!left || !right || left.val !== right.val) return false
    queue.push(left.left)
    queue.push(right.right)
    queue.push(left.right)
    queue.push(right.left)
  }
  return true
}
