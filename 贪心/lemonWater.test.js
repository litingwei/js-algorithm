import change from './lemonWater'

test('change', () => {
  expect(change([5, 5, 5, 10, 20])).toBe(true)
})
test('change2', () => {
  expect(change([5, 5, 10, 10, 20])).toBe(false)
})
test('change3', () => {
  expect(change([5, 5, 10, 20])).toBe(true)
})
