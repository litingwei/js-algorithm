/**
 * 给你一个整数数组 nums ，其中元素已经按 升序 排列，请你将其转换为一棵 
平衡
 二叉搜索树。
 */
/*
要将一个升序排列的整数数组转换为一棵平衡二叉搜索树（BST），可以利用递归的方法，通过不断选择中间元素作为根节点来构建树。这样可以确保树的左右子树高度差不超过1，从而保证树的平衡性。

解题思路
选择中间元素作为根节点：

选择数组的中间元素作为当前子树的根节点。
左边的部分将构建左子树，右边的部分将构建右子树。
递归构建子树：

递归地对左半部分数组构建左子树。
递归地对右半部分数组构建右子树。
边界条件：

当数组为空时，返回 null。*/
function TreeNode(val, left = null, right = null) {
  this.val = val
  this.left = left
  this.right = right
}

var sortedArrayToBST = function (nums) {
  if (!nums.length) return null

  const convertToBST = (left, right) => {
    if (left > right) return null

    const mid = Math.floor((left + right) / 2)
    const node = new TreeNode(nums[mid])

    node.left = convertToBST(left, mid - 1)
    node.right = convertToBST(mid + 1, right)

    return node
  }

  return convertToBST(0, nums.length - 1)
}

function printTree(node) {
  if (!node) return
  console.log(node.val)
  printTree(node.left)
  printTree(node.right)
}

function runTests() {
  const nums = [-10, -3, 0, 5, 9]
  const root = sortedArrayToBST(nums)
  printTree(root) // 预期输出是一个平衡二叉搜索树的先序遍历结果
}

runTests()
