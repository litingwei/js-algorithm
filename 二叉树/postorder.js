const bt = require('./bt')
// const postorder = (root) => {
//   if (!root) return
//   postorder(root.left)
//   postorder(root.right)
//   console.log(root.val)
// }
const postorder = (root) => {
  if (!root) return
  const stack = [root]
  const outputStack = []
  while (stack.length) {
    const node = stack.pop()
    outputStack.push(node)
    if (node.left) stack.push(node.left)
    if (node.right) stack.push(node.right)
  }
  while (outputStack.length) {
    const node = outputStack.pop()
    console.log(node.val)
  }
}
postorder(bt)
