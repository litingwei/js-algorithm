/**
 * 给你两个单链表的头节点 headA 和 headB ，请你找出并返回两个单链表相交的起始节点。如果两个链表不存在相交节点，返回 null 。
 */
/**
要找出两个单链表相交的起始节点，可以使用一个巧妙且高效的算法，该算法使用双指针。具体步骤如下：

初始化两个指针 pA 和 pB 分别指向 headA 和 headB。
依次遍历两个链表。当一个指针到达链表的末尾时，将它重定位到另一个链表的头部继续遍历。
如果两个链表相交，两个指针最终会在相交节点处相遇。
如果两个链表不相交，两个指针最终会在 null 处相遇。
这个方法的时间复杂度为 O(m + n)，其中 m 和 n 分别是两个链表的长度。空间复杂度为 O(1)，因为只使用了常数级的额外空间。
 */
/**
 * 
解释
初始化指针：两个指针 pA 和 pB 分别指向 headA 和 headB。
遍历链表：在每一步，指针 pA 和 pB 分别向前移动一个节点。如果指针到达链表末尾，就重定向到另一个链表的头部继续遍历。
相遇或终止：如果两个链表相交，两个指针最终会在相交节点处相遇，并返回相交节点。如果两个链表不相交，两个指针最终会在 null 处相遇，并返回 null。
这个方法的关键在于利用双指针遍历链表，使得两个指针在相同的时间内遍历相同的节点数，从而能够在相交节点处相遇。
 */
function getIntersectionNode(headA, headB) {
  if (!headA || !headB) {
    return null
  }

  let pA = headA
  let pB = headB

  while (pA !== pB) {
    // 当指针 pA 到达链表末尾时，重定向到 headB
    pA = pA === null ? headB : pA.next
    // 当指针 pB 到达链表末尾时，重定向到 headA
    pB = pB === null ? headA : pB.next
  }

  return pA
}

// 示例用法
function ListNode(val) {
  this.val = val
  this.next = null
}

// 创建示例链表
const intersect = new ListNode(8)
intersect.next = new ListNode(4)
intersect.next.next = new ListNode(5)

const headA = new ListNode(4)
headA.next = new ListNode(1)
headA.next.next = intersect

const headB = new ListNode(5)
headB.next = new ListNode(6)
headB.next.next = new ListNode(1)
headB.next.next.next = intersect

console.log(getIntersectionNode(headA, headB)) // 输出: intersect节点，即值为8的节点
