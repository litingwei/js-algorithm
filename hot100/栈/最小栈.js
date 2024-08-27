/**
 * 设计一个支持 push ，pop ，top 操作，并能在常数时间内检索到最小元素的栈。

实现 MinStack 类:

MinStack() 初始化堆栈对象。
void push(int val) 将元素val推入堆栈。
void pop() 删除堆栈顶部的元素。
int top() 获取堆栈顶部的元素。
int getMin() 获取堆栈中的最小元素。
 */
/**
 * 这个问题要求我们设计一个栈，并在常数时间内获取栈中的最小元素。为了实现这一点，我们可以使用两个栈：

数据栈 data：用于存储所有插入的元素。
辅助栈 min：用于存储每个元素插入时的当前最小值。
在每次 push 操作时，我们将元素压入数据栈，并将当前元素与辅助栈的栈顶元素进行比较，将较小的值压入辅助栈。这样，辅助栈的栈顶始终保持数据栈中的最小值。
 */
var MinStack = function () {
  this.data = [] // 数据栈，存储所有的元素
  this.min = [] // 辅助栈，存储每次操作时的最小值
}

/**
 * @param {number} val
 * @return {void}
 */
MinStack.prototype.push = function (val) {
  this.data.push(val) // 将元素压入数据栈
  if (this.min.length) {
    // 辅助栈为空时，将当前元素直接压入辅助栈；
    // 辅助栈不为空时，将当前元素与辅助栈顶元素的较小值压入辅助栈
    this.min.push(Math.min(val, this.min[this.min.length - 1]))
  } else {
    this.min.push(val)
  }
}

/**
 * @return {void}
 */
MinStack.prototype.pop = function () {
  this.data.pop() // 移除数据栈的栈顶元素
  this.min.pop() // 同时移除辅助栈的栈顶元素
}

/**
 * @return {number}
 */
MinStack.prototype.top = function () {
  return this.data[this.data.length - 1] // 返回数据栈的栈顶元素
}

/**
 * @return {number}
 */
MinStack.prototype.getMin = function () {
  return this.min[this.min.length - 1] // 返回辅助栈的栈顶元素，即当前栈中的最小值
}
