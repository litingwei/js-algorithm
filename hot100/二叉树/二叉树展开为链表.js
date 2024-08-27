/**
 * 给你二叉树的根结点 root ，请你将它展开为一个单链表：

展开后的单链表应该同样使用 TreeNode ，其中 right 子指针指向链表中下一个结点，而左子指针始终为 null 。
展开后的单链表应该与二叉树 先序遍历 顺序相同。
 */
var flatten = function (root) {
  if (!root) return // 如果根节点为空，直接返回

  flatten(root.left) // 递归展开左子树
  flatten(root.right) // 递归展开右子树

  let left = root.left // 保存左子树
  let right = root.right // 保存右子树

  if (left) {
    root.right = left // 将左子树放在当前节点的右边
    root.left = null // 左指针置为空

    while (left.right) {
      // 找到左子树展开后的最后一个节点
      left = left.right
    }
    left.right = right // 将右子树接到左子树的末尾
  }
}
/**
 * 代码解释
 */
/**代码解释
递归处理：

首先，递归地处理左子树 flatten(root.left) 和右子树 flatten(root.right)，这会将左右子树分别转换为按先序排列的链表。
插入展开的左子树：

如果当前节点有左子树，将其作为右子树的前缀，并将原本的右子树拼接到左子树的末尾。
具体操作是将 root.right 设为 root.left，并将 root.left 设为 null。
调整右子树：

通过循环找到左子树展开后的最右端节点，并将原本的右子树接在其后。 */
function TreeNode(val, left = null, right = null) {
  this.val = val
  this.left = left
  this.right = right
}

function printLinkedList(root) {
  const result = []
  while (root) {
    result.push(root.val)
    root = root.right
  }
  console.log(result)
}

function runTests() {
  const root = new TreeNode(1)
  root.left = new TreeNode(2)
  root.right = new TreeNode(5)
  root.left.left = new TreeNode(3)
  root.left.right = new TreeNode(4)
  root.right.right = new TreeNode(6)

  flatten(root)
  printLinkedList(root) // 预期输出: [1, 2, 3, 4, 5, 6]
}

runTests()
