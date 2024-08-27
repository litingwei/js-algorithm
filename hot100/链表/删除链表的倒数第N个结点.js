/** 给你一个链表，删除链表的倒数第 n 个结点，并且返回链表的头结点。
 */
/**
要删除链表的倒数第 n 个节点，可以使用双指针技巧。具体步骤如下：

初始化一个虚拟头节点（dummy），指向链表的头节点，以处理头节点被删除的情况。
初始化两个指针（fast 和 slow），都指向虚拟头节点。
先让快指针（fast）向前移动 n + 1 步，使快慢指针之间的距离为 n。
然后同时移动快指针和慢指针，直到快指针到达链表末尾。
此时，慢指针的下一个节点就是要删除的节点。
删除该节点，并返回链表的头节点。
 */
/**
解释
初始化虚拟头节点：

dummy 是一个虚拟节点，用于简化操作，指向链表的头节点。
fast 和 slow 都指向虚拟头节点。
先让快指针移动 n + 1 步：

通过循环，让快指针向前移动 n + 1 步。
同时移动快指针和慢指针：

快指针和慢指针同时向前移动，直到快指针到达链表末尾。
此时，慢指针的下一个节点就是要删除的节点。
删除节点：

修改慢指针的 next 指针，跳过要删除的节点。
返回新链表的头节点：

返回 dummy.next，即新的链表头节点。
这种方法的时间复杂度为 O(L)，其中 L 是链表的长度。空间复杂度为 O(1)，因为我们只使用了常数级别的额外空间。
 */
function ListNode(val) {
  this.val = val
  this.next = null
}

function removeNthFromEnd(head, n) {
  const dummy = new ListNode(0)
  dummy.next = head
  let fast = dummy
  let slow = dummy

  // 先让快指针移动 n + 1 步
  for (let i = 0; i <= n; i++) {
    fast = fast.next
  }

  // 然后同时移动快指针和慢指针
  while (fast !== null) {
    fast = fast.next
    slow = slow.next
  }

  // 此时慢指针的下一个节点就是要删除的节点
  slow.next = slow.next.next

  return dummy.next
}

// 示例用法
const head = new ListNode(1)
head.next = new ListNode(2)
head.next.next = new ListNode(3)
head.next.next.next = new ListNode(4)
head.next.next.next.next = new ListNode(5)

const n = 2
const newHead = removeNthFromEnd(head, n)
let current = newHead
while (current !== null) {
  console.log(current.val) // 输出: 1 2 3 5
  current = current.next
}
