/**
 * 给定一个数组 nums，编写一个函数将所有 0 移动到数组的末尾，同时保持非零元素的相对顺序。
 * @param {*} nums
 */

/**
 *
 *  要使用双指针的方法将所有 0 移动到数组的末尾，同时保持非零元素的相对顺序，我们可以这样做：
 *  使用两个指针 left 和 right。left 用于跟踪非零元素的位置，right 用于遍历整个数组。
 *  遍历数组，将 right 指针指向的非零元素移动到 left 指针的位置，然后移动 left 指针。
 *  遍历完成后，left 指针后的所有位置填充为 0。
 */
/**
 * 解释：
 * 初始化 left 指针为 0。
 * 遍历数组 nums，right 指针从 0 到数组的末尾。
 * 如果 right 指针指向的元素不为 0，将其赋值给 left 指针指向的位置，然后 left 指针右移一位。
 * 遍历完成后，从 left 指针的位置开始，将数组剩余位置全部填充为 0。
 * 这个方法确保了在不复制数组的情况下，原地对数组进行操作，并且时间复杂度为 O(n)。
 */
function moveZeroes(nums) {
  let left = 0

  // 遍历数组
  for (let right = 0; right < nums.length; right++) {
    if (nums[right] !== 0) {
      // 将非零元素移动到left指针的位置，并移动left指针
      nums[left] = nums[right]
      left++
    }
  }

  // 将left指针后的所有位置填充为0
  for (let i = left; i < nums.length; i++) {
    nums[i] = 0
  }
}

// 示例用法
const nums = [0, 1, 0, 3, 12]
moveZeroes(nums)
console.log(nums) // 输出: [1, 3, 12, 0, 0]
