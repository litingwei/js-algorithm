import dp from './differentPaths'

test('dp', () => {
  expect(
    dp(
      [
        [0, 0],
        [0, 0],
      ],
      2,
      2
    )
  ).toBe(2)
})
test('dp2', () => {
  let arr = [
    [0, 0, 0],
    [0, 1, 0],
    [0, 0, 0],
  ]
  expect(dp(arr, 3, 3)).toBe(2)
})
