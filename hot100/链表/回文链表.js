/**
 * 给你一个单链表的头节点 head ，请你判断该链表是否为回文链表。如果是，返回 true ；否则，返回 false
 * @param {*} head
 * @returns
 */
/**
 * 要判断一个单链表是否为回文链表，可以使用以下步骤：

 * 使用快慢指针找到链表的中间节点。
 * 反转链表的后半部分。
 * 比较前半部分和反转后的后半部分是否相同。
 * 恢复链表（可选）。
 * 根据比较结果返回 true 或 false。
 * 具体步骤
 * 找到中间节点：使用快慢指针（slow 和 fast）。快指针每次移动两步，慢指针每次移动一步，当快指针到达末尾时，慢指针位于链表的中间。
 * 反转后半部分链表：从慢指针开始反转后半部分的链表。
 * 比较两部分链表：逐一比较前半部分和后半部分的节点值。
 * 恢复链表（可选）：将反转后的部分恢复原来的顺序，以保持链表结构不变。
 * 返回结果：根据比较结果返回 true 或 false。
 */
/**
 *
 * 解释
 * 找到中间节点：
 * 使用快慢指针方法，当快指针到达链表末尾时，慢指针到达链表中间。
 * 反转后半部分链表：
 * 从慢指针位置开始，逐个反转节点，直到链表末尾。反转后，prev 指向新的后半部分链表的头节点。
 * 比较两部分链表：
 * 从链表头开始，逐个比较前半部分和反转后的后半部分的节点值。如果有任何不匹配，则返回 false。
 * 恢复链表（可选）：
 * 可选步骤，如果需要保持原链表不变，可以在比较完后再次反转后半部分链表，恢复原链表结构。
 * 返回结果：
 * 如果所有节点都匹配，则返回 true，否则返回 false。
 */
function isPalindrome(head) {
  if (head === null || head.next === null) return true

  // 使用快慢指针找到中间节点
  let slow = head
  let fast = head
  while (fast !== null && fast.next !== null) {
    slow = slow.next
    fast = fast.next.next
  }

  // 反转后半部分链表
  let prev = null
  while (slow !== null) {
    let next = slow.next
    slow.next = prev
    prev = slow
    slow = next
  }

  // 比较前半部分和后半部分
  let left = head
  let right = prev
  while (right !== null) {
    if (left.val !== right.val) {
      return false
    }
    left = left.next
    right = right.next
  }

  return true
}

// 示例用法
function ListNode(val) {
  this.val = val
  this.next = null
}

// 创建示例链表: 1 -> 2 -> 2 -> 1
const head = new ListNode(1)
head.next = new ListNode(2)
head.next.next = new ListNode(2)
head.next.next.next = new ListNode(1)

console.log(isPalindrome(head)) // 输出: true

// 创建示例链表: 1 -> 2
const head2 = new ListNode(1)
head2.next = new ListNode(2)

console.log(isPalindrome(head2)) // 输出: false
