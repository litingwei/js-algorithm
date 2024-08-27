// 二叉树的节点
class Node {
  constructor(val) {
    this.val = val
    this.left = null
    this.right = null
  }
}

class Tree {
  constructor(data) {
    let nodeList = []
    let root
    for (let i = 0, len = data.length; i < len; i++) {
      let node = new Node(data[i])
      nodeList.push(node)
      if (i > 0) {
        // 计算当前节点属于哪一层
        let n = Math.floor(Math.sqrt(i + 1))
        // 记录当前层的起始点
        let q = Math.pow(2, n) - 1
        // 记录上一层的起始点
        let p = Math.pow(2, n - 1) - 1
        // 找到当前节点的父节点
        let parent = nodeList[p + Math.floor((i - q) / 2)]
        // 将当前节点和上一侧的节点相关联
        if (parent.left) {
          parent.right = node
        } else {
          parent.left = node
        }
      }
    }
    root = nodeList[0]
    nodeList = null
    return root
  }
  // 判断二叉树是否对称
  static isSymmetry(root) {
    if (!root) return true
    let walk = (left, right) => {
      if (!left && !right) return true
      if (!left || !right) return false
      if (left.val !== right.val) return false
      return walk(left.left, right.right) && walk(left.right, right.left)
    }
    // 从根节点的左右子节点开始判断
    return walk(root.left, root.right)
  }
}
export default Tree
