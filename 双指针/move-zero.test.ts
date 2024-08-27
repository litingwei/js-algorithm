import { moveZeroe2 } from './move-zero'
describe('移动0到数组的末尾', () => {
  it('正常情况', () => {
    const arr = [0, 1, 0, 3, 12]
    moveZeroe2(arr)
    expect(arr).toEqual([1, 3, 12, 0, 0])
  })
  it('没有 0', () => {
    const arr = [1, 2, 3]
    moveZeroe2(arr)
    expect(arr).toEqual([1, 2, 3])
  })
  it('全是0', () => {
    const arr = [0, 0, 0]
    moveZeroe2(arr)
    expect(arr).toEqual([0, 0, 0])
  })
})
