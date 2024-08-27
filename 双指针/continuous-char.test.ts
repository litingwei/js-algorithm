import { findContinuousChar1, findContinuousChar2 } from './continuous-char'
describe('连续字符和长度', () => {
  it('正常情况', () => {
    const res = findContinuousChar2('aabbcccddeeee11223')
    expect(res.char).toBe('e')
    expect(res.length).toBe(4)
  })
  it('空字符串', () => {
    const res = findContinuousChar2('')
    expect(res.char).toBe('')
    expect(res.length).toBe(0)
  })
  it('无连续字符', () => {
    const res = findContinuousChar2('abc')
    expect(res.char).toBe('a')
    expect(res.length).toBe(1)
  })
  it('全部都是连续字符', () => {
    const res = findContinuousChar2('aaaa')
    expect(res.char).toBe('a')
    expect(res.length).toBe(4)
  })
})
