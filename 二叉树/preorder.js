const bt = require('./bt')

// const preorder = (root) => {
//   if (!root) return
//   console.log(root.val)
//   preorder(root.left)
//   preorder(root.right)
// }
const preorder = (root) => {
  if (!root) return
  const stack = [root]
  while (stack.length) {
    const node = stack.pop()
    console.log(node.val)
    if (node.right) stack.push(node.right)
    if (node.left) stack.push(node.left)
  }
}
preorder(bt)
