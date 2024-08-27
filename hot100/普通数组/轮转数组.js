/**
 * 
 给定一个整数数组 nums，将数组中的元素向右轮转 k 个位置，其中 k 是非负数。
 */
/**
 * 这种方法通过翻转数组的三个部分来实现轮转：首先翻转整个数组，然后翻转前 k 个元素，最后翻转剩余的元素。
 */
function rotate(nums, k) {
  const n = nums.length
  k = k % n

  // 翻转整个数组
  reverse(nums, 0, n - 1)
  console.log('nums1', nums)
  // 翻转前 k 个元素
  reverse(nums, 0, k - 1)
  console.log('nums2', nums)
  // 翻转剩余元素
  reverse(nums, k, n - 1)
  console.log('nums3', nums)
}

function reverse(nums, start, end) {
  while (start < end) {
    const temp = nums[start]
    nums[start] = nums[end]
    nums[end] = temp
    start++
    end--
  }
}

// 示例用法
let nums = [1, 2, 3, 4, 5, 6, 7]
let k = 3
rotate(nums, k)
console.log(nums) // 输出: [5, 6, 7, 1, 2, 3, 4]
