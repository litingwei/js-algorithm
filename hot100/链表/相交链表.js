/**
 * 给你两个单链表的头节点 headA 和 headB ，请你找出并返回两个单链表相交的起始节点。如果两个链表不存在相交节点，返回 null 。
 */
/**
 * 我来帮你解决链表相交的问题。这个问题可以通过"双指针"的方式优雅地解决。基本思路是：让两个指针分别从两个链表头部开始遍历，当一个指针到达末尾时，让它从另一个链表的头部继续遍历。这样，如果存在相交点，两个指针最终会在相交点相遇。
 */
// 链表节点的定义
class ListNode {
  constructor(val) {
    this.val = val
    this.next = null
  }
}

/**
 * @param {ListNode} headA
 * @param {ListNode} headB
 * @return {ListNode}
 */
function getIntersectionNode(headA, headB) {
  if (!headA || !headB) return null

  // 使用两个指针
  let pointerA = headA
  let pointerB = headB

  // 当两个指针不相等时继续遍历
  while (pointerA !== pointerB) {
    // 指针A到达末尾时，从B链表头部继续
    pointerA = pointerA ? pointerA.next : headB
    // 指针B到达末尾时，从A链表头部继续
    pointerB = pointerB ? pointerB.next : headA
  }

  // 返回相交点（如果不存在相交点，会返回null）
  return pointerA
}

// 用于测试的辅助函数：创建链表
function createLinkedList(values) {
  if (!values.length) return null

  const head = new ListNode(values[0])
  let current = head

  for (let i = 1; i < values.length; i++) {
    current.next = new ListNode(values[i])
    current = current.next
  }

  return head
}

// 用于测试的辅助函数：打印链表
function printList(head) {
  const values = []
  let current = head

  while (current) {
    values.push(current.val)
    current = current.next
  }

  return values.join(' -> ')
}

// 测试用例1：有相交点的情况
function test1() {
  // 创建公共部分
  const commonPart = createLinkedList([8, 4, 5])

  // 创建链表A的独立部分
  const headA = createLinkedList([4, 1])
  let tailA = headA
  while (tailA.next) tailA = tailA.next
  tailA.next = commonPart

  // 创建链表B的独立部分
  const headB = createLinkedList([5, 6, 1])
  let tailB = headB
  while (tailB.next) tailB = tailB.next
  tailB.next = commonPart

  console.log('List A:', printList(headA))
  console.log('List B:', printList(headB))

  const intersection = getIntersectionNode(headA, headB)
  console.log(
    'Intersection node value:',
    intersection ? intersection.val : 'null'
  )
}

// 测试用例2：无相交点的情况
function test2() {
  const headA = createLinkedList([2, 6, 4])
  const headB = createLinkedList([1, 5])

  console.log('List A:', printList(headA))
  console.log('List B:', printList(headB))

  const intersection = getIntersectionNode(headA, headB)
  console.log(
    'Intersection node value:',
    intersection ? intersection.val : 'null'
  )
}

// 运行测试
console.log('Test Case 1 (With intersection):')
test1()
console.log('\nTest Case 2 (Without intersection):')
test2()

/** 
1. 使用两个指针 `pointerA` 和 `pointerB` 分别从两个链表的头部开始遍历

2. 当任意指针到达链表末尾时，将其重定向到另一个链表的头部继续遍历

3. 如果存在相交点：
 - 两个指针最终会在相交点相遇
 - 因为它们走过的总路程相等：(A的长度 + B的公共部分) = (B的长度 + A的公共部分)

4. 如果不存在相交点：
 - 两个指针最终都会变成 null
 - 循环结束，返回 null

算法的时间复杂度是 O(N+M)，其中 N 和 M 是两个链表的长度。空间复杂度是 O(1)，因为只使用了两个指针。

代码中包含了完整的测试用例：
1. 测试用例1演示了有相交点的情况
2. 测试用例2演示了无相交点的情况

你可以运行测试用例来验证代码的正确性。需要我解释代码中的任何特定部分吗？
 */
