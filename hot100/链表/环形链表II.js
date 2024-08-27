/**
 * 给定一个链表的头节点  head ，返回链表开始入环的第一个节点。 如果链表无环，则返回 null。
 * 如果链表中有某个节点，可以通过连续跟踪 next 指针再次到达，则链表中存在环。 为了表示给定链表中的环，评测系统内部使用整数 pos 来表示链表尾连接到链表中的位置（索引从 0 开始）。如果 pos 是 -1，则在该链表中没有环。注意：pos 不作为参数进行传递，仅仅是为了标识链表的实际情况。
 * 不允许修改 链表。
 */
/**
 * 要找到链表中环的起始节点，可以利用快慢指针（龟兔赛跑算法）并结合一些数学推理来实现。具体步骤如下：
 * 使用快慢指针判断链表是否有环。
 * 如果链表有环，则重置一个指针到头节点，并让两个指针以相同速度前进，它们会在环的起始节点相遇。
 * 详细步骤
 * 初始化两个指针：慢指针（slow）和快指针（fast），都指向链表的头节点。
 * 移动指针并检测环：
 * 慢指针每次移动一步。
 * 快指针每次移动两步。
 * 如果快指针和慢指针相遇，说明链表中有环。
 * 找到环的起始节点：
 * 将慢指针重置到链表的头节点。
 * 慢指针和快指针每次都移动一步。
 * 当两个指针再次相遇时，相遇点就是环的起始节点。
 */
/**
 * 解释
 * 初始化指针：
 * slow 和 fast 都指向链表的头节点。
 * 检测环：
 * 在每次迭代中，slow 向前移动一步，fast 向前移动两步。
 * 如果 slow 和 fast 相遇，则说明链表中存在环。
 * 找到环的起始节点：
 * 将 slow 重置到链表的头节点。
 * 让 slow 和 fast 每次都移动一步。
 * 当两个指针再次相遇时，相遇点即为环的起始节点。
 * 这个算法的时间复杂度为 O(n)，空间复杂度为 O(1)，因为只使用了两个指针。通过这种方法，可以高效地找到链表中环的起始节点。
 */
function detectCycle(head) {
  if (!head || !head.next) return null

  let slow = head
  let fast = head

  // 检测环
  while (fast && fast.next) {
    slow = slow.next
    fast = fast.next.next

    if (slow === fast) {
      // 找到环的起始节点
      slow = head
      while (slow !== fast) {
        slow = slow.next
        fast = fast.next
      }
      return slow
    }
  }

  return null
}

// 示例用法
function ListNode(val) {
  this.val = val
  this.next = null
}

// 创建链表：1 -> 2 -> 3 -> 4 -> 5 -> 2 (环)
const head = new ListNode(1)
head.next = new ListNode(2)
head.next.next = new ListNode(3)
head.next.next.next = new ListNode(4)
head.next.next.next.next = new ListNode(5)
head.next.next.next.next.next = head.next // 创建环

console.log(detectCycle(head)) // 输出: head.next节点，即值为2的节点

// 创建链表：1 -> 2 -> 3 -> 4 -> 5 (无环)
const head2 = new ListNode(1)
head2.next = new ListNode(2)
head2.next.next = new ListNode(3)
head2.next.next.next = new ListNode(4)
head2.next.next.next.next = new ListNode(5)

console.log(detectCycle(head2)) // 输出: null
