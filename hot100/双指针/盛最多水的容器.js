/**
 * 给你 n 个非负整数 a1，a2，...，an，每个数代表坐标中的一个点 (i, ai) 。在坐标内画 n 条垂直线，垂直线 i 的两个端点分别为 (i, ai) 和 (i, 0) 。
 * 找出其中的两条线，使得它们与 x 轴共同构成的容器可以容纳最多的水。
 * @param {*} height
 * @returns
 */
/**
 * 要用双指针法解决这个问题，可以这样做：

 * 初始化两个指针，一个指向数组的开头，另一个指向数组的末尾。
 * 计算当前两个指针所形成的容器的容量，容量是两个指针指向的较小高度乘以指针之间的距离。
 * 更新最大容量。
 * 移动指针：移动指向较短垂线的那个指针，这样有可能找到更高的垂线，从而增加容量。
 * 重复步骤2-4，直到两个指针相遇。
 */
/**
 * 解释：
 *
 * 初始化 left 指针为 0，right 指针为 height.length - 1。
 * 使用一个循环，当 left 小于 right 时继续执行。
 * 计算当前容器的高度和宽度，高度取 height[left] 和 height[right] 的较小值，宽度是 right - left。
 * 计算当前容器的容量，并更新最大容量 maxWater。
 * 如果左边的高度较小，移动 left 指针；否则，移动 right 指针。
 * 最终返回最大容量 maxWater。
 * 这个方法的时间复杂度是 O(n)，因为每个元素最多被访问一次。
 */
function maxArea(height) {
  let left = 0
  let right = height.length - 1
  let maxWater = 0

  while (left < right) {
    // 计算当前容器的容量
    const currentHeight = Math.min(height[left], height[right])
    const currentWidth = right - left
    const currentWater = currentHeight * currentWidth

    // 更新最大容量
    maxWater = Math.max(maxWater, currentWater)

    // 移动指针
    if (height[left] < height[right]) {
      left++
    } else {
      right--
    }
  }

  return maxWater
}

// 示例用法
const height = [1, 8, 6, 2, 5, 4, 8, 3, 7]
const result = maxArea(height)
console.log(result) // 输出: 49
