import baseballGame from './baseballGame'
test('baseball', () => {
  expect(baseballGame(['5', '2', 'C', 'D', '+'])).toBe(30)
})
test('baseball:2', () => {
  expect(baseballGame(['5', '-2', '4', 'C', 'D', '9', '+', '+'])).toBe(27)
})
