/**
 * 给定整数数组 nums 和整数 k，请返回数组中第 k 个最大的元素。

请注意，你需要找的是数组排序后的第 k 个最大的元素，而不是第 k 个不同的元素。

你必须设计并实现时间复杂度为 O(n) 的算法解决此问题。
 */
import { PriorityQueue } from '@datastructures-js/priority-queue'

var findKthLargest = function (nums, k) {
  // 创建小顶堆
  const heap = new PriorityQueue({
    compare: (a, b) => a - b,
  })
  //  维持一个大小为k的堆
  for (const value of nums) {
    heap.enqueue(value)
    if (heap.size() > k) {
      heap.dequeue()
    }
  }
  // 获取堆顶
  return heap.front()
}
console.log(findKthLargest([3, 2, 1, 5, 6, 4], 2))
