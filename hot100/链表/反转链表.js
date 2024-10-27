/**
 * 给你单链表的头节点 head ，请你反转链表，并返回反转后的链表。
 */
/**
 * 
要反转一个单链表，可以使用迭代的方法。通过遍历链表，将每个节点的 next 指针反向指向前一个节点，从而实现链表的反转。下面是详细的步骤和代码实现：

迭代方法
初始化三个指针：prev 为 null，curr 为 head，temp 为 null。
遍历链表，在每次迭代中：
保存当前节点的下一个节点 temp = curr.next。
将当前节点的 next 指向 prev。
将 prev 移动到当前节点。
将 curr 移动到下一个节点。
最后，prev 将成为新链表的头节点，返回 prev。

解释
初始化指针：

prev 指向 null，表示反转后链表的初始前节点。
curr 指向 head，表示当前节点。
遍历链表：

保存当前节点的下一个节点 temp。
将当前节点的 next 指针指向 prev，实现反转。
移动 prev 和 curr，分别指向当前节点和下一个节点。
返回新头节点：

当 curr 为 null 时，链表遍历结束，prev 指向新链表的头节点，返回 prev。
通过这种方法，链表得以原地反转，时间复杂度为 O(n)，空间复杂度为 O(1)，其中 n 为链表节点数。
 */
function reverseList(head) {
  let prev = null
  let curr = head

  while (curr !== null) {
    let temp = curr.next // 保存下一个节点
    curr.next = prev // 反转当前节点的指针
    prev = curr // 移动 prev 到当前节点
    curr = temp // 移动 curr 到下一个节点
  }

  return prev // prev 成为新的头节点
}

// 示例用法
function ListNode(val) {
  this.val = val
  this.next = null
}

// 创建示例链表
const head = new ListNode(1)
head.next = new ListNode(2)
head.next.next = new ListNode(3)
head.next.next.next = new ListNode(4)
head.next.next.next.next = new ListNode(5)

const reversedHead = reverseList(head)
console.log(reversedHead) // 输出: 5 -> 4 -> 3 -> 2 -> 1
