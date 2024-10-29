/**
 * 给你一个按照非递减顺序排列的整数数组 nums，和一个目标值 target。请你找出给定目标值在数组中的开始位置和结束位置。

如果数组中不存在目标值 target，返回 [-1, -1]。

你必须设计并实现时间复杂度为 O(log n) 的算法解决此问题。
 */
//我来帮你实现一个时间复杂度为 O(log n) 的算法来解决这个问题。我们可以使用两次二分查找，分别找到目标值的起始位置和结束位置。

/**
 * @param {number[]} nums - 按非递减顺序排列的整数数组
 * @param {number} target - 要查找的目标值
 * @return {number[]} - 返回目标值的开始位置和结束位置，如果不存在返回[-1, -1]
 */
function searchRange(nums, target) {
  // 找到左边界
  const findLeft = () => {
    let left = 0
    let right = nums.length - 1
    let leftBound = -1

    while (left <= right) {
      const mid = Math.floor((left + right) / 2)

      if (nums[mid] === target) {
        leftBound = mid
        // 继续向左寻找，看是否还有相同的值
        right = mid - 1
      } else if (nums[mid] < target) {
        left = mid + 1
      } else {
        right = mid - 1
      }
    }

    return leftBound
  }

  // 找到右边界
  const findRight = () => {
    let left = 0
    let right = nums.length - 1
    let rightBound = -1

    while (left <= right) {
      const mid = Math.floor((left + right) / 2)

      if (nums[mid] === target) {
        rightBound = mid
        // 继续向右寻找，看是否还有相同的值
        left = mid + 1
      } else if (nums[mid] < target) {
        left = mid + 1
      } else {
        right = mid - 1
      }
    }

    return rightBound
  }

  // 获取左右边界
  const leftIndex = findLeft()
  const rightIndex = findRight()

  return [leftIndex, rightIndex]
}

// 测试用例
console.log(searchRange([5, 7, 7, 8, 8, 10], 8)) // 输出: [3,4]
console.log(searchRange([5, 7, 7, 8, 8, 10], 6)) // 输出: [-1,-1]
console.log(searchRange([], 0)) // 输出: [-1,-1]
console.log(searchRange([1], 1)) // 输出: [0,0]
console.log(searchRange([2, 2], 2)) // 输出: [0,1]

/** 
这个解决方案的主要思路是：

1. 使用两个二分查找函数：
   - `findLeft()` 查找目标值的最左边位置
   - `findRight()` 查找目标值的最右边位置

2. 在每个二分查找中：
   - 当找到目标值时，不立即返回
   - 对于左边界查找，继续往左边寻找
   - 对于右边界查找，继续往右边寻找

3. 算法复杂度：
   - 时间复杂度：O(log n)，因为使用了两次二分查找
   - 空间复杂度：O(1)，只使用了常数级别的额外空间

4. 特殊情况处理：
   - 空数组
   - 数组中不存在目标值
   - 目标值只出现一次
   - 目标值出现多次

你可以直接使用这段代码，它已经包含了完整的测试用例。需要其他测试用例或有任何问题，请告诉我。*/
