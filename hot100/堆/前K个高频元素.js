/**
 * 给你一个整数数组 nums 和一个整数 k ，请你返回其中出现频率前 k 高的元素。你可以按 任意顺序 返回答案。
 */
import { PriorityQueue } from '@datastructures-js/priority-queue'
var topKFrequent = function (nums, k) {
  const map = new Map()
  const res = []
  for (const num of nums) {
    map.set(num, (map.get(num) || 0) + 1)
  }
  // 创建小顶堆
  const heap = new PriorityQueue({
    compare: (a, b) => a.value - b.value,
  })
  for (const [key, value] of map) {
    heap.enqueue({ key, value })
    if (heap.size() > k) {
      heap.dequeue()
    }
  }
  while (heap.size()) res.push(heap.dequeue().key)
  return res
}
console.log(topKFrequent([1, 1, 1, 2, 2, 3], 2))
