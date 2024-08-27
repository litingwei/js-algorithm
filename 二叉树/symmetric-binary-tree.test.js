import Tree from './symmetric-binary-tree'
test('Tree1', () => {
  let root = new Tree([1, 2, 2, 3, 4, 4, 3])
  expect(Tree.isSymmetry(root)).toBe(true)
})
test('Tree2', () => {
  let root = new Tree([1, 2, 2, 3, 4, 5, 3])
  expect(Tree.isSymmetry(root)).toBe(false)
})
