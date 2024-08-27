// 用链表实现队列
interface IListNode {
  value: number
  next: IListNode | null
}

class MyQueue {
  private head: IListNode | null = null
  private tail: IListNode | null = null
  private len = 0
  // 入队，在tail位置
  add(n: number) {
    const newNode: IListNode = {
      value: n,
      next: null,
    }
    if (this.head == null) {
      this.head = newNode
    }
    const tailNode = this.tail
    if (tailNode) {
      tailNode.next = newNode
    }
    this.tail = newNode
    this.len++
  }
  delete() {
    const headNode = this.head
    if (headNode == null) return null
    if (this.len <= 0) return null
    const value = headNode.value
    this.head = headNode.next
    this.len--
    return value
  }
  get length() {
    // length需要单独存储，不能遍历链表来获取，否则时间复杂度为O(n)
    return this.len
  }
}
const q = new MyQueue()
q.add(100)
q.add(200)
q.add(300)
console.info('length1', q.length)
console.log(q.delete())
console.info('length2', q.length)
console.log(q.delete())
console.info('length3', q.length)
console.log(q.delete())
console.info('length4', q.length)
console.log(q.delete())
// 性能测试
const q1 = new MyQueue()
console.time('queue with list')
for (let i = 0; i < 10 * 10000; i++) {
  q1.add(i)
}
for (let i = 0; i < 10 * 10000; i++) {
  q1.delete()
}
console.timeEnd('queue with list')

const q2 = []
console.time('queue with array')
for (let i = 0; i < 10 * 10000; i++) {
  q2.push(i)
}
for (let i = 0; i < 10 * 10000; i++) {
  q2.shift()
}
console.timeEnd('queue with array')
