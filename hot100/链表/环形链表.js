/**
 * 给你一个链表的头节点 head ，判断链表中是否有环。
 * 如果链表中有某个节点，可以通过连续跟踪 next 指针再次到达，则链表中存在环。 为了表示给定链表中的环，评测系统内部使用整数 pos 来表示链表尾连接到链表中的位置（索引从 0 开始）。注意：pos 不作为参数进行传递 。仅仅是为了标识链表的实际情况。
 * 如果链表中存在环 ，则返回 true 。 否则，返回 false 。
 */
/**
 * 
要判断一个链表中是否有环，可以使用快慢指针（也称为龟兔赛跑算法）。具体步骤如下：

初始化两个指针：慢指针（slow）和快指针（fast），都指向链表的头节点。
移动指针：
慢指针每次移动一步。
快指针每次移动两步。
检查指针相遇：
如果链表中存在环，快指针最终会追上慢指针，并且两者会在环内的某个节点相遇。
如果链表中不存在环，快指针会到达链表的末尾（null）。
 */
/**
 * 
释
初始化两个指针：

slow 和 fast 都指向链表的头节点。
移动指针：

在每次迭代中，slow 向前移动一步，fast 向前移动两步。
检查指针相遇：

如果 slow 和 fast 相遇，则链表中存在环，返回 true。
如果 fast 到达链表的末尾（即 fast 或 fast.next 为 null），则链表中不存在环，返回 false。
这种方法的时间复杂度为 O(n)，空间复杂度为 O(1)，因为只使用了两个指针。
 */
function hasCycle(head) {
  if (!head || !head.next) {
    return false
  }

  let slow = head
  let fast = head

  while (fast && fast.next) {
    slow = slow.next
    fast = fast.next.next

    if (slow === fast) {
      return true
    }
  }

  return false
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

console.log(hasCycle(head)) // 输出: true

// 创建链表：1 -> 2 -> 3 -> 4 -> 5 (无环)
const head2 = new ListNode(1)
head2.next = new ListNode(2)
head2.next.next = new ListNode(3)
head2.next.next.next = new ListNode(4)
head2.next.next.next.next = new ListNode(5)

console.log(hasCycle(head2)) // 输出: false
