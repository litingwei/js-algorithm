const bt = require('./bt')
// const inorder = (root) => {
//   if (!root) return
//   inorder(root.left)
//   console.log(root.val)
//   inorder(root.right)
// }
const inorder = (root) => {
  if (!root) return
  const stack = []
  let p = root
  while (stack.length || p) {
    while (p) {
      stack.push(p)
      p = p.left
    }
    let node = stack.pop()
    console.log(node.val)
    p = node.right
  }
}
inorder(bt)
