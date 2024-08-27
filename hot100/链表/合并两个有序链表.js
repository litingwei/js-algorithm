/**
 * 将两个升序链表合并为一个新的 升序 链表并返回。新链表是通过拼接给定的两个链表的所有节点组成的。
 */
/**
 * 初始化一个虚拟头节点（dummy），用于简化操作，并维护一个指针（current），指向新链表的最后一个节点。
 * 比较两个链表的当前节点，将较小的节点接到新链表的末尾，并移动指针到下一个节点。
 * 继续这个过程，直到其中一个链表为空。
 * 将剩余的非空链表接到新链表的末尾。
 */
/**
 * 解释
 * 初始化虚拟头节点：
 * dummy 是一个虚拟节点，用于简化操作，current 指向新链表的最后一个节点，初始时指向 dummy。
 * 
 * 合并过程：
 * 依次比较 l1 和 l2 的当前节点值，将较小的节点接到 current 的 next，并将指针移动到下一个节点。
 * 如果 l1 当前节点值较小，则 current.next = l1，并将 l1 向前移动一个节点；否则，将 l2 接到 current 的 next，并将 l2 向前移动一个节点。
 * 移动 current 到新链表的最后一个节点。
 * 接上剩余的链表：
 * 当其中一个链表为空时，将另一个非空链表接到新链表的末尾。
 * 返回新链表：

 * 返回 dummy.next，即新的合并后的升序链表。
 * 这种方法的时间复杂度为 O(n + m)，其中 n 和 m 分别是两个链表的长度。空间复杂度为 O(1)，因为我们只使用了常数级别的额外空间。
 */
function ListNode(val) {
  this.val = val
  this.next = null
}

function mergeTwoLists(l1, l2) {
  const dummy = new ListNode(-1)
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

  // 接上剩余的链表
  current.next = l1 !== null ? l1 : l2

  return dummy.next
}

// 示例用法
const l1 = new ListNode(1)
l1.next = new ListNode(2)
l1.next.next = new ListNode(4)

const l2 = new ListNode(1)
l2.next = new ListNode(3)
l2.next.next = new ListNode(4)

const mergedList = mergeTwoLists(l1, l2)
let current = mergedList
while (current !== null) {
  console.log(current.val) // 输出: 1 1 2 3 4 4
  current = current.next
}
