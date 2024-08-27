// 622循环队列 k是队列长度
export default class MyCircularQueue {
  constructor(k) {
    this.list = Array(k)
    // 队列头部
    this.front = 0
    // 队列尾部
    this.rear = 0
    // 队列长度
    this.max = k
  }
  // 入队
  enQueue(num) {
    if (this.isFull()) {
      return false
    }
    this.list[this.rear] = num
    this.rear = (this.rear + 1) % this.max
    return true
  }
  // 出队
  deQueue() {
    if (this.isEmpty()) {
      return false
    }
    let v = this.list[this.front]
    this.list[this.front] = null
    this.front = (this.front + 1) % this.max
    return v
  }
  isEmpty() {
    return (
      this.front === this.rear &&
      (this.list[this.front] === null || this.list[this.front] === undefined)
    )
  }
  isFull() {
    return (
      this.front === this.rear &&
      this.list[this.front] !== null &&
      this.list[this.front] !== undefined
    )
  }
  Front() {
    return this.list[this.front]
  }
  Rear() {
    let rear = this.rear - 1
    if (rear < 0) {
      rear = this.max - 1
    }
    return this.list[rear]
  }
}
