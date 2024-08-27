var binaryTreePaths = function (root) {
  // 结果数组，用于存储所有路径
  const result = []

  // 定义递归函数，传入当前节点和路径
  function dfs(node, path) {
    if (!node) return

    // 将当前节点的值添加到路径中
    path += node.val

    // 如果当前节点是叶子节点，将路径添加到结果中
    if (!node.left && !node.right) {
      result.push(path)
    } else {
      // 如果不是叶子节点，继续递归遍历左右子节点
      path += '->' // 添加箭头表示路径
      if (node.left) dfs(node.left, path)
      if (node.right) dfs(node.right, path)
    }
  }

  // 从根节点开始递归
  dfs(root, '')

  // 返回结果数组
  return result
}

function TreeNode(val, left, right) {
  this.val = val === undefined ? 0 : val
  this.left = left === undefined ? null : left
  this.right = right === undefined ? null : right
}

// 测试用例
function runTests() {
  // 测试用例 1
  const root1 = new TreeNode(
    1,
    new TreeNode(2, null, new TreeNode(5)),
    new TreeNode(3)
  )
  console.log(binaryTreePaths(root1)) // 输出 ["1->2->5", "1->3"]

  // 测试用例 2
  const root2 = new TreeNode(1)
  console.log(binaryTreePaths(root2)) // 输出 ["1"]

  // 测试用例 3
  const root3 = null
  console.log(binaryTreePaths(root3)) // 输出 []
}

// 运行测试
runTests()
