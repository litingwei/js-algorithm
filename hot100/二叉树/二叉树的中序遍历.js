/**
 * 给定一个二叉树的根节点 root ，返回 它的 中序 遍历 。
 */
/**
 * 整体流程
初始化结果数组和辅助栈，从根节点开始。
循环遍历树：
如果当前节点不为空，将当前节点入栈，向左子树移动。
如果当前节点为空，从栈中弹出节点，处理节点值，将当前节点指向右子树。
循环结束后，返回结果数组。
 */
/**
 * 
 * 
 * 1、检查根节点是否为空。如果根节点为空，返回空数组。
初始化结果数组 res，用于存储中序遍历的节点值。
初始化栈 stack，用于辅助遍历。
初始化当前节点 cur，从根节点开始。
2、当当前节点 cur 不为空或者栈不为空时，继续循环。
3、如果当前节点 cur 不为空，将当前节点 cur 入栈，然后将当前节点指向其左子节点。
这一部分代码的目的是将左子树的所有节点依次入栈，直到到达最左叶子节点。
4、如果当前节点 cur 为空，弹出栈顶节点 node。
将栈顶节点的值加入结果数组 res。
将当前节点 cur 指向 node 的右子节点。
这一部分代码的目的是处理节点，并且开始遍历右子树。
5、循环结束后，返回结果数组 res。
 */
// 二叉树节点定义
function TreeNode(val, left, right) {
  this.val = val === undefined ? 0 : val
  this.left = left === undefined ? null : left
  this.right = right === undefined ? null : right
}

/**
 *
 * @param {*} root
 * @returns
 */
var inorderTraversal = function (root) {
  if (!root) return []
  const res = []
  const stack = []
  let cur = root
  while (cur || stack.length) {
    if (cur) {
      stack.push(cur)
      cur = cur.left
    } else {
      const node = stack.pop()
      res.push(node.val)
      cur = node.right
    }
  }
  return res
}

// 测试用例
function runTests() {
  // 测试用例 1：空树
  let root = null
  console.log(inorderTraversal(root)) // 应该输出 []

  // 测试用例 2：只有一个节点的树
  root = new TreeNode(1)
  console.log(inorderTraversal(root)) // 应该输出 [1]

  // 测试用例 3：完全二叉树
  root = new TreeNode(
    1,
    new TreeNode(2, new TreeNode(4), new TreeNode(5)),
    new TreeNode(3)
  )
  console.log(inorderTraversal(root)) // 应该输出 [4, 2, 5, 1, 3]

  // 测试用例 4：左斜树
  root = new TreeNode(
    1,
    new TreeNode(2, new TreeNode(3, new TreeNode(4, new TreeNode(5))))
  )
  console.log(inorderTraversal(root)) // 应该输出 [5, 4, 3, 2, 1]

  // 测试用例 5：右斜树
  root = new TreeNode(
    1,
    null,
    new TreeNode(
      2,
      null,
      new TreeNode(3, null, new TreeNode(4, null, new TreeNode(5)))
    )
  )
  console.log(inorderTraversal(root)) // 应该输出 [1, 2, 3, 4, 5]

  // 测试用例 6：普通二叉树
  root = new TreeNode(
    1,
    new TreeNode(2, new TreeNode(4), null),
    new TreeNode(3, new TreeNode(5), new TreeNode(6))
  )
  console.log(inorderTraversal(root)) // 应该输出 [4, 2, 1, 5, 3, 6]
}

// 运行测试
runTests()
