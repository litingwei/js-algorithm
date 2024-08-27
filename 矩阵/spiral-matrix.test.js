import spiralMatrix from './spiral-matrix'

test('spiralMatrix', () => {
  expect(
    spiralMatrix([
      [1, 2, 3],
      [4, 5, 6],
      [7, 8, 9],
    ])
  ).toEqual([1, 2, 3, 6, 9, 8, 7, 4, 5])
})
describe('一维数组', () => {
  it('一维数组', () => {
    console.log(spiralMatrix([[7], [9], [6]]))
    expect(spiralMatrix([[7], [9], [6]])).toEqual([7, 9, 6])
  })
})
