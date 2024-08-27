export interface ITreeNode {
  value: number
  left: ITreeNode | null
  right: ITreeNode | null
}
const arr = []
/**
 * 前序遍历二叉树
 *
 * @param node 二叉树的根节点
 * @returns 无返回值，遍历结果直接输出到控制台
 */
function preOrderTraverse(node) {
  if (node == null) return
  console.log(node.value)
  preOrderTraverse(node.left)
  preOrderTraverse(node.right)
}
/**
 * 中序遍历二叉树
 *
 * @param node 二叉树的根节点
 * @returns 无返回值，遍历结果直接输出到控制台
 */
function inOrderTraverse(node) {
  if (node == null) return
  inOrderTraverse(node.left)
  arr.push(node.value)
  inOrderTraverse(node.right)
}
/**
 * 后序遍历二叉树节点
 *
 * @param node 二叉树节点
 * @returns 无返回值
 */
function postOrderTraverse(node) {
  if (node == null) return
  postOrderTraverse(node.left)
  postOrderTraverse(node.right)
  console.log(node.value)
}
export function getKthValue(node: ITreeNode, k: number): number {
  inOrderTraverse(node)
  return arr[k - 1]
}
const tree1: ITreeNode = {
  value: 5,
  left: {
    value: 3,
    left: {
      value: 2,
      left: null,
      right: null,
    },
    right: {
      value: 4,
      left: null,
      right: null,
    },
  },
  right: {
    value: 7,
    left: {
      value: 6,
      left: null,
      right: null,
    },
    right: {
      value: 8,
      left: null,
      right: null,
    },
  },
}
console.log(getKthValue(tree1, 3))
