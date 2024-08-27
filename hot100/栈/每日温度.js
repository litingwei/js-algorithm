/**给定一个整数数组 temperatures ，表示每天的温度，返回一个数组 answer ，其中 answer[i] 是指对于第 i 天，下一个更高温度出现在几天后。如果气温在这之后都不会升高，请在该位置用 0 来代替。 */
/**
 * 这个问题可以通过使用单调栈来解决。单调栈是一种栈结构，其中栈内的元素保持特定的单调顺序。在这个问题中，栈中的元素代表 temperatures 数组中的下标，栈中的温度值是单调递减的。当遇到比栈顶温度更高的温度时，意味着找到了栈顶元素对应的下一个更高温度。我们可以弹出栈顶元素，计算当前下标和栈顶元素下标的差值，并将其填入结果数组中。
 */
var dailyTemperatures = function (temperatures) {
  const len = temperatures.length // 获取温度数组的长度
  const result = new Array(len).fill(0) // 初始化结果数组，长度与温度数组相同，初始值为 0
  const stack = [0] // 初始化栈，存储的是下标，栈内存储的温度值是递减的

  for (let i = 1; i < len; i++) {
    // 遍历温度数组，从第二天开始
    if (temperatures[i] <= temperatures[stack[stack.length - 1]]) {
      // 如果当前温度小于或等于栈顶温度，将当前下标入栈
      stack.push(i)
    } else {
      // 如果当前温度大于栈顶温度，意味着找到了栈顶下标对应的下一个更高温度
      while (
        stack.length &&
        temperatures[i] > temperatures[stack[stack.length - 1]]
      ) {
        const index = stack.pop() // 弹出栈顶元素的下标
        result[index] = i - index // 计算当前下标与弹出下标的差值，并填入结果数组
      }
      stack.push(i) // 将当前下标入栈
    }
  }

  return result // 返回结果数组
}
/**
 * 详细步骤
初始化：

创建一个结果数组 result，其长度与 temperatures 数组相同，初始值全为 0。
创建一个栈 stack，用于存储温度数组的下标。
遍历温度数组：

从 i = 1 开始遍历数组。
如果当前温度小于或等于栈顶温度，则将当前下标压入栈中。
如果当前温度大于栈顶温度，开始循环弹出栈顶元素，并计算当前下标与栈顶下标的差值，更新 result 数组。
返回结果：

遍历完成后，返回结果数组。
复杂度分析
时间复杂度：O(n)，每个元素最多被压栈和弹栈各一次。
空间复杂度：O(n)，栈和结果数组都需要额外的存储空间。
 */
