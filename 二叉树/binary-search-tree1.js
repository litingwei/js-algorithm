class Node {
  constructor(val) {
    this.val = val
    this.left = null
    this.right = null
  }
}
class Tree {
  constructor(data) {
    let root = new Node(data.shift())
    // 遍历所有的数据，逐渐插入到当前这颗搜素树中去
    data.forEach((item) => {
      this.insert(root, item)
    })
    return root
  }
  insert(root, item) {
    if (root.val > item) {
      if (!root.left) root.left = new Node(item)
      else this.insert(root.left, item)
    } else {
      if (!root.right) root.right = new Node(item)
      else this.insert(root.right, item)
    }
  }
  // 判断当前这颗树是否为二叉搜索树
  static walk(root) {
    if (!root.left && !root.right) {
      return true
    } else if (root.left && root.left.val > root.val) {
      return false
    } else if (root.right && root.right.val < root.val) {
      return false
    }
    return this.walk(root.left) && this.walk(root.right)
  }
}
export default Tree
export { Node }
