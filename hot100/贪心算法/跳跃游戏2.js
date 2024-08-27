/**代码解释
给定一个长度为 n 的 0 索引整数数组 nums。初始位置为 nums[0]。

每个元素 nums[i] 表示从索引 i 向前跳转的最大长度。换句话说，如果你在 nums[i] 处，你可以跳转到任意 nums[i + j] 处:

0 <= j <= nums[i] 
i + j < n
返回到达 nums[n - 1] 的最小跳跃次数。生成的测试用例可以到达 nums[n - 1]。

 */
/**
 * 
解题思路
贪心策略：我们在遍历数组的过程中记录当前能够到达的最远位置，并在当前位置达到前一个最远位置时，执行一次跳跃，并更新最远可达位置。

跳跃计数：每次到达当前跳跃范围的最远位置时，我们需要增加一次跳跃计数。当最远位置到达或超过最后一个元素时，停止跳跃并返回跳跃次数。
 */
var jump = function (nums) {
  let jumps = 0 // 记录跳跃次数
  let currentEnd = 0 // 当前跳跃的结束位置
  let farthest = 0 // 当前能到达的最远位置

  for (let i = 0; i < nums.length - 1; i++) {
    // 更新能到达的最远位置
    farthest = Math.max(farthest, i + nums[i])

    // 如果到了当前跳跃的结束位置
    if (i == currentEnd) {
      jumps++ // 增加一次跳跃
      currentEnd = farthest // 更新跳跃的结束位置
    }

    // 如果当前的最远位置已经能够达到或超过最后一个元素
    if (currentEnd >= nums.length - 1) {
      break
    }
  }

  return jumps
}
/**
 * 代码解释
初始化:

jumps: 用于记录跳跃次数。
currentEnd: 表示当前跳跃的结束位置。
farthest: 表示从当前跳跃范围内能够达到的最远位置。
遍历数组:

对于每个元素 i，我们更新 farthest 为 Math.max(farthest, i + nums[i])，即当前位置 i 能跳到的最远位置。
如果 i 到达 currentEnd，这意味着我们需要执行一次跳跃，并将 currentEnd 更新为 farthest。
如果 currentEnd 已经达到或超过了数组的最后一个元素，则可以直接停止遍历。
返回跳跃次数:

返回跳跃次数 jumps，即到达最后一个元素的最小跳跃次数。
 */
const nums = [2, 3, 1, 1, 4]
console.log(jump(nums))
