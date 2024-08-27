/**
 *
 *以数组 intervals 表示若干个区间的集合，其中单个区间为 intervals[i] = [starti, endi] 。
 *请你合并所有重叠的区间，并返回 一个不重叠的区间数组，该数组需恰好覆盖输入中的所有区间 。
 */
var merge = function (intervals) {
  if (intervals.length === 0) return []

  intervals.sort((a, b) => a[0] - b[0])
  const res = []
  for (let i = 0; i < intervals.length; i++) {
    if (res.length === 0 || res[res.length - 1][1] < intervals[i][0]) {
      res.push(intervals[i])
    } else {
      res[res.length - 1][1] = Math.max(res[res.length - 1][1], intervals[i][1])
    }
  }

  return res
}
