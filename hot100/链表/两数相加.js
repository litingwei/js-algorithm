/**
 * 给你两个 非空 的链表，表示两个非负的整数。它们每位数字都是按照 逆序 的方式存储的，并且每个节点只能存储 一位 数字。
 * 请你将两个数相加，并以相同形式返回一个表示和的链表。
 * 你可以假设除了数字 0 之外，这两个数都不会以 0 开头。
 */
/**
 * 要将两个链表表示的逆序整数相加，并以相同形式返回一个表示和的链表，可以使用以下步骤：
 * 初始化一个虚拟头节点（dummy），用于简化操作，并维护一个指针（current）指向新链表的最后一个节点。
 * 初始化一个变量（carry）用于保存进位值，初始为0。
 * 遍历两个链表，直到两个链表都为空且没有进位值：
 * 取出两个链表的当前节点值（如果链表为空，则取0）。
 * 计算当前位的和（两个节点值加上进位值）。
 * 更新进位值。
 * 创建新节点保存当前位的结果，并将其连接到新链表的末尾。
 * 移动指针到下一个节点。
 * 返回新链表的头节点（dummy.next）。
 */
/**
 * 解释
 * 初始化虚拟头节点：
 * dummy 是一个虚拟节点，用于简化操作，current 指向新链表的最后一个节点，初始时指向 dummy。
 * carry 初始化为0，用于保存进位值。
 * 遍历两个链表：
 * 取出两个链表的当前节点值，如果链表为空，则取0。
 * 计算当前位的和（两个节点值加上进位值），更新进位值。
 * 创建新节点保存当前位的结果，并将其连接到新链表的末尾。
 * 移动指针到下一个节点。
 * 处理剩余进位值：
 * 
 * 如果遍历结束后仍有进位值，则需要创建一个新节点保存进位值。
 * 返回新链表：
 * 
 * 返回 dummy.next，即新的表示和的链表。
这种方法的时间复杂度为 O(max(n, m))，其中 n 和 m 分别是两个链表的长度。空间复杂度为 O(max(n, m))，因为我们需要为结果链表分配节点。
 */
function ListNode(val) {
  this.val = val
  this.next = null
}

function addTwoNumbers(l1, l2) {
  const dummy = new ListNode(0)
  let current = dummy
  let carry = 0

  while (l1 !== null || l2 !== null || carry !== 0) {
    const val1 = l1 !== null ? l1.val : 0
    const val2 = l2 !== null ? l2.val : 0
    const sum = val1 + val2 + carry
    carry = Math.floor(sum / 10)
    current.next = new ListNode(sum % 10)
    current = current.next
    if (l1 !== null) l1 = l1.next
    if (l2 !== null) l2 = l2.next
  }

  return dummy.next
}

// 示例用法
const l1 = new ListNode(2)
l1.next = new ListNode(4)
l1.next.next = new ListNode(3)

const l2 = new ListNode(5)
l2.next = new ListNode(6)
l2.next.next = new ListNode(4)

const result = addTwoNumbers(l1, l2)
let current = result
while (current !== null) {
  console.log(current.val) // 输出: 7 0 8
  current = current.next
}
