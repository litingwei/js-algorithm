/**
 * 给你链表的头结点 head ，请将其按 升序 排列并返回 排序后的链表 。你可以在 O(n log n) 时间复杂度和常数级空间复杂度下，对链表进行排序吗？t实现
 */
/**
 * 
要对链表进行排序，可以使用归并排序，这是一种效率较高且适用于链表的排序算法。归并排序的时间复杂度是 O(n log n)，空间复杂度是 O(log n)（由于递归调用栈）。

归并排序的步骤
找到链表的中间节点，将链表分成两部分。
递归地对每一部分进行排序。
合并两个有序链表。
解释
找到中间节点：

使用快慢指针找到链表的中间节点，并将链表从中间分成两部分。
快指针每次走两步，慢指针每次走一步。当快指针到达末尾时，慢指针指向的节点就是中间节点。
通过设置 prev.next = null 将链表分成两部分。
递归排序每一部分：

对两部分分别进行递归排序。
合并两个有序链表：

使用辅助函数 merge 将两个有序链表合并成一个有序链表。
维护一个虚拟头节点 dummy 和当前指针 current，逐一比较 l1 和 l2 的节点值，将较小的节点连接到 current 后面，并移动指针。
将剩余的非空链表连接到 current 后面。
这种方法的时间复杂度为 O(n log n)，其中 n 是链表的长度。空间复杂度为 O(log n)，因为递归调用栈的深度为 log n。
 */
function ListNode(val, next = null) {
  this.val = val
  this.next = next
}

function sortList(head) {
  if (!head || !head.next) return head

  // 1. 找到中间节点
  let slow = head
  let fast = head
  let prev = null

  while (fast !== null && fast.next !== null) {
    prev = slow
    slow = slow.next
    fast = fast.next.next
  }

  prev.next = null // 将链表分成两部分

  // 2. 递归排序每一部分
  const l1 = sortList(head)
  const l2 = sortList(slow)

  // 3. 合并两个有序链表
  return merge(l1, l2)
}

function merge(l1, l2) {
  const dummy = new ListNode(0)
  let current = dummy

  while (l1 !== null && l2 !== null) {
    if (l1.val < l2.val) {
      current.next = l1
      l1 = l1.next
    } else {
      current.next = l2
      l2 = l2.next
    }
    current = current.next
  }

  current.next = l1 !== null ? l1 : l2

  return dummy.next
}

// 示例用法
const head = new ListNode(4)
head.next = new ListNode(2)
head.next.next = new ListNode(1)
head.next.next.next = new ListNode(3)

const sortedHead = sortList(head)
let current = sortedHead
while (current !== null) {
  console.log(current.val) // 输出: 1 2 3 4
  current = current.next
}
