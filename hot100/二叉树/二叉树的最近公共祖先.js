/*给定一个二叉树, 找到该树中两个指定节点的最近公共祖先。

百度百科中最近公共祖先的定义为：“对于有根树 T 的两个节点 p、q，最近公共祖先表示为一个节点 x，满足 x 是 p、q 的祖先且 x 的深度尽可能大（一个节点也可以是它自己的祖先）。”

*/

// 二叉树节点的数据结构定义
class TreeNode {
  constructor(val) {
    this.val = val
    this.left = null
    this.right = null
  }
}

/**
 * 寻找二叉树中两个节点的最近公共祖先
 * @param {TreeNode} root - 二叉树的根节点
 * @param {TreeNode} p - 第一个目标节点
 * @param {TreeNode} q - 第二个目标节点
 * @return {TreeNode} - 返回最近公共祖先节点
 */
function lowestCommonAncestor(root, p, q) {
  // 基础情况：如果root为空，或者root等于p或q中的任意一个，则返回root
  if (root === null || root === p || root === q) {
    return root
  }

  // 递归搜索左子树
  const left = lowestCommonAncestor(root.left, p, q)
  // 递归搜索右子树
  const right = lowestCommonAncestor(root.right, p, q)

  // 如果左子树返回空，说明p和q都在右子树中
  if (left === null) {
    return right
  }
  // 如果右子树返回空，说明p和q都在左子树中
  if (right === null) {
    return left
  }
  // 如果左右子树都不为空，说明p和q分别在root的两侧，因此root就是最近公共祖先
  return root
}

// 测试代码
function test() {
  // 构建测试用例树
  //       3
  //      / \
  //     5   1
  //    / \  / \
  //   6  2  0  8
  //     / \
  //    7   4

  const root = new TreeNode(3)
  root.left = new TreeNode(5)
  root.right = new TreeNode(1)
  root.left.left = new TreeNode(6)
  root.left.right = new TreeNode(2)
  root.right.left = new TreeNode(0)
  root.right.right = new TreeNode(8)
  root.left.right.left = new TreeNode(7)
  root.left.right.right = new TreeNode(4)

  // 测试用例1：寻找节点5和节点1的最近公共祖先
  const result1 = lowestCommonAncestor(root, root.left, root.right)
  console.log('测试用例1结果：', result1.val) // 预期输出: 3

  // 测试用例2：寻找节点5和节点4的最近公共祖先
  const result2 = lowestCommonAncestor(root, root.left, root.left.right.right)
  console.log('测试用例2结果：', result2.val) // 预期输出: 5
}

test()
/** 

这个解决方案使用递归的方式来查找最近公共祖先。让我解释一下算法的关键思路：

1. **基本思路**：从根节点开始，递归地在左右子树中查找目标节点p和q。

2. **终止条件**：
   - 如果当前节点为null，返回null
   - 如果当前节点等于p或q中的任意一个，返回当前节点

3. **递归过程**：
   - 分别在左右子树中递归查找
   - 根据返回结果判断最近公共祖先的位置

4. **结果判断**：
   - 如果左子树返回为空，说明p和q都在右子树，返回右子树的结果
   - 如果右子树返回为空，说明p和q都在左子树，返回左子树的结果
   - 如果左右子树都不为空，说明p和q分别在当前节点的两侧，当前节点即为最近公共祖先

代码中包含了测试用例，你可以直接运行test()函数来验证算法的正确性。需要注意的是，这个实现假设：
1. 树中节点的值都是唯一的
2. p和q一定存在于树中
3. 一个节点可以是它自己的祖先
*/
