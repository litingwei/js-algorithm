/**
 * 给你二叉树的根结点 root ，请你将它展开为一个单链表：

展开后的单链表应该同样使用 TreeNode ，其中 right 子指针指向链表中下一个结点，而左子指针始终为 null 。
展开后的单链表应该与二叉树 先序遍历 顺序相同。
 */
//我来帮你实现二叉树展开为单链表的算法。这个问题可以通过多种方式实现，我们将实现原地转换的方法，不使用额外空间。

// 二叉树节点的定义
class TreeNode {
  constructor(val) {
    this.val = val
    this.left = null
    this.right = null
  }
}

/**
 * 将二叉树展开为单链表
 * @param {TreeNode} root - 二叉树的根节点
 * @return {void} 不返回任何值，原地修改
 */
function flatten(root) {
  // 如果根节点为空，直接返回
  if (!root) return

  let current = root
  while (current) {
    if (current.left) {
      // 找到左子树的最右节点
      let predecessor = current.left
      while (predecessor.right) {
        predecessor = predecessor.right
      }

      // 将当前节点的右子树接到左子树的最右节点
      predecessor.right = current.right

      // 将左子树移到右边
      current.right = current.left
      current.left = null
    }
    // 继续处理下一个节点
    current = current.right
  }
}

/**
 * 辅助函数：将二叉树转换为数组（用于测试）
 * @param {TreeNode} root - 二叉树根节点
 * @return {number[]} - 返回转换后的数组
 */
function treeToArray(root) {
  const result = []
  let current = root
  while (current) {
    result.push(current.val)
    if (current.left) {
      result.push('左子树不为null！错误！')
    }
    current = current.right
  }
  return result
}

/**
 * 辅助函数：打印二叉树（用于调试）
 * @param {TreeNode} root - 二叉树根节点
 */
function printTree(root) {
  if (!root) return
  console.log(root.val)
  printTree(root.left)
  printTree(root.right)
}

// 测试代码
function test() {
  // 测试用例1：标准二叉树
  //     1
  //    / \
  //   2   5
  //  / \   \
  // 3   4   6
  console.log('测试用例1：标准二叉树')
  const root1 = new TreeNode(1)
  root1.left = new TreeNode(2)
  root1.right = new TreeNode(5)
  root1.left.left = new TreeNode(3)
  root1.left.right = new TreeNode(4)
  root1.right.right = new TreeNode(6)

  console.log('展开前（先序遍历）：')
  printTree(root1)

  flatten(root1)
  console.log('展开后的链表：')
  console.log(treeToArray(root1)) // 预期输出: [1,2,3,4,5,6]

  // 测试用例2：只有左子树的二叉树
  //   1
  //  /
  // 2
  //  \
  //   3
  console.log('\n测试用例2：只有左子树的二叉树')
  const root2 = new TreeNode(1)
  root2.left = new TreeNode(2)
  root2.left.right = new TreeNode(3)

  flatten(root2)
  console.log(treeToArray(root2)) // 预期输出: [1,2,3]

  // 测试用例3：只有一个节点的二叉树
  console.log('\n测试用例3：单节点二叉树')
  const root3 = new TreeNode(1)
  flatten(root3)
  console.log(treeToArray(root3)) // 预期输出: [1]

  // 测试用例4：空树
  console.log('\n测试用例4：空树')
  flatten(null)
  console.log(treeToArray(null)) // 预期输出: []
}

// 运行测试
test()

/** 
这个实现使用了一种巧妙的原地算法，主要思路如下：

1. **算法核心思想**：
   - 对于当前节点，如果它有左子树，就找到左子树的最右节点
   - 将当前节点的右子树接到左子树的最右节点上
   - 将整个左子树作为当前节点的右子树
   - 将左子树置为null
   - 继续处理下一个节点

2. **时间复杂度分析**：
   - 时间复杂度：O(n)，其中n是节点数
   - 空间复杂度：O(1)，使用常数额外空间

3. **特点**：
   - 原地修改，不需要额外空间
   - 保持了先序遍历的顺序
   - 所有左子节点都被置为null

实现中包含了四个测试用例：
1. 标准的完整二叉树
2. 只有左子树的二叉树
3. 只有一个节点的二叉树
4. 空树

代码中也包含了辅助函数：
- `treeToArray`：用于将展开后的链表转换为数组，方便查看结果
- `printTree`：用于打印树的结构，帮助调试

使用这个实现时需要注意：
1. 函数会直接修改原树结构
2. 处理后的树所有节点的左子树都为null
3. 原树的结构无法恢复
*/
