import sort, { NodeList } from './quickSortLinked'
test('quickSortLinked', () => {
  const list = new NodeList([1, 3, 2, 4, 5, 6, 7, 8, 9])
  sort(list)
  let res = []
  let next = list
  while (next) {
    res.push(next.val)
    next = next.next
  }
  expect(res).toEqual([1, 2, 3, 4, 5, 6, 7, 8, 9])
})
