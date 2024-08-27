import taskQueue from './taskQueue'
test('taskQueue', () => {
  expect(taskQueue(['A', 'A', 'A', 'B', 'B', 'B'], 2)).toBe(8)
})
test('taskQueue:2', () => {
  expect(taskQueue(['A', 'A', 'A', 'A', 'B', 'B', 'B', 'C', 'C'], 1)).toBe(9)
})
