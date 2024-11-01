/**
 * 给你 n 个非负整数 a1，a2，...，an，每个数代表坐标中的一个点 (i, ai) 。在坐标内画 n 条垂直线，垂直线 i 的两个端点分别为 (i, ai) 和 (i, 0) 。
 * 找出其中的两条线，使得它们与 x 轴共同构成的容器可以容纳最多的水。
 * @param {*} height
 * @returns
 */
// 我来帮你实现求解盛最多水的容器问题，这个问题可以使用双指针方法高效解决。

/**
 * @param {number[]} height
 * @return {number}
 */
function maxArea(height) {
  let maxWater = 0
  let left = 0
  let right = height.length - 1

  while (left < right) {
    // 计算当前容器的宽度
    const width = right - left
    // 容器的高度取决于较短的那条垂线
    const h = Math.min(height[left], height[right])
    // 计算当前容器的容量
    const area = width * h
    // 更新最大容量
    maxWater = Math.max(maxWater, area)

    // 移动较短的那条垂线
    if (height[left] < height[right]) {
      left++
    } else {
      right--
    }
  }

  return maxWater
}

// 测试用例
console.log(maxArea([1, 8, 6, 2, 5, 4, 8, 3, 7]))
// 输出: 49
// 解释: 在上面的例子中，容器的宽度为 8，高度取决于较短的垂线高度 7，
// 所以最大容量为 8 * 7 = 49

console.log(maxArea([1, 1]))
// 输出: 1
// 解释: 容器宽度为 1，高度为 1，容量为 1

console.log(maxArea([4, 3, 2, 1, 4]))
// 输出: 16
// 解释: 使用第一个和最后一个高度为4的垂线，宽度为4，容量为16

console.log(maxArea([1, 2, 4, 3]))
// 输出: 4
// 解释: 使用高度2和3的垂线，宽度为2，容量为4

/**
 * 这个解决方案使用双指针方法，具体思路如下：
 *
1. 初始化：
   - 使用两个指针 left 和 right，分别指向数组的开始和结束
   - 初始化最大水量 maxWater 为 0

2. 算法步骤：
   - 计算当前两个指针之间可以储存的水量
   - 水量 = 宽度(right - left) × 高度(两个指针指向的高度中的较小值)
   - 更新最大水量
   - 移动指针：始终移动指向较短垂线的那个指针

3. 为什么这样移动指针是正确的：
   - 容器的容量受限于较短的那条垂线
   - 如果移动指向较高垂线的指针，由于宽度减小，而高度不可能超过当前较短的垂线，所以容量一定会减小
   - 只有移动指向较短垂线的指针，才可能得到更大的容量

算法复杂度分析：
- 时间复杂度：O(n)，只需要遍历一次数组
- 空间复杂度：O(1)，只使用了常数额外空间

特殊情况处理：
- 处理数组长度为2的情况
- 处理所有高度相同的情况
- 处理单调递增或递减的情况

关键优化：
- 不需要考虑所有可能的组合
- 利用双指针方法，每次都排除掉不可能成为最优解的情况
- 通过移动较短的垂线来寻找可能的更大容量

需要我解释算法的某个具体部分，或者你想了解其他实现方式吗？*/
