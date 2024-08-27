import kStationTransfer from './KStationTransfer'

test('kStationTransfer', () => {
  expect(kStationTransfer(0, 2, 1)).toBe(200)
})
test('kStationTransfer', () => {
  expect(kStationTransfer(0, 2, 0)).toBe(500)
})
