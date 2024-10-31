/**
 *
 *以数组 intervals 表示若干个区间的集合，其中单个区间为 intervals[i] = [starti, endi] 。
 *请你合并所有重叠的区间，并返回 一个不重叠的区间数组，该数组需恰好覆盖输入中的所有区间 。
 */
//  这个合并区间的问题可以通过先排序后合并的方式来解决。我来帮你实现一个解决方案。

/**
 * @param {number[][]} intervals
 * @return {number[][]}
 */
function mergeIntervals(intervals) {
  // 如果输入为空或只有一个区间，直接返回
  if (intervals.length <= 1) return intervals

  // 按照区间起点升序排序
  intervals.sort((a, b) => a[0] - b[0])

  const result = [intervals[0]] // 初始化结果数组，放入第一个区间

  for (let i = 1; i < intervals.length; i++) {
    const currentInterval = intervals[i]
    const lastMergedInterval = result[result.length - 1]

    // 如果当前区间的起点小于等于上一个合并区间的终点，说明有重叠
    if (currentInterval[0] <= lastMergedInterval[1]) {
      // 更新上一个合并区间的终点为两个区间终点的较大值
      lastMergedInterval[1] = Math.max(
        lastMergedInterval[1],
        currentInterval[1]
      )
    } else {
      // 没有重叠，直接将当前区间加入结果数组
      result.push(currentInterval)
    }
  }

  return result
}

// 测试用例
console.log(
  mergeIntervals([
    [1, 3],
    [2, 6],
    [8, 10],
    [15, 18],
  ])
)
// 输出: [[1,6],[8,10],[15,18]]

console.log(
  mergeIntervals([
    [1, 4],
    [4, 5],
  ])
)
// 输出: [[1,5]]

console.log(
  mergeIntervals([
    [1, 4],
    [2, 3],
  ])
)
// 输出: [[1,4]]

console.log(
  mergeIntervals([
    [1, 4],
    [5, 6],
  ])
)
// 输出: [[1,4],[5,6]]

/**
 
 这个解决方案的核心思路是：
 
 1. 首先按照区间的起点进行升序排序
 2. 初始化结果数组，放入第一个区间
 3. 遍历剩余区间，判断是否与结果数组中的最后一个区间重叠：
    - 如果重叠，更新最后一个区间的终点
    - 如果不重叠，将当前区间加入结果数组
 
 算法分析：
 - 时间复杂度：O(nlogn)，主要是排序的时间复杂度
 - 空间复杂度：O(n)，需要存储合并后的区间
 
 算法的关键点：
 1. 通过排序保证了我们总是按照区间起点的顺序处理
 2. 只需要和结果数组中的最后一个区间比较，因为前面的区间已经处理完成
 3. 合并时只需要更新终点值，起点保持不变（因为已经排序）
 
 需要我详细解释代码中的任何部分吗？或者需要看看其他特殊情况的处理方式？
**/
