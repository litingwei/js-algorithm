/**
 * 给你一个链表，两两交换其中相邻的节点，并返回交换后链表的头节点。
 * 你必须在不修改节点内部的值的情况下完成本题（即，只能进行节点交换）。
 */
/**
简化步骤如下：

创建哑结点（dummy node）：用哑结点指向链表头，便于处理边界情况。
遍历链表：使用 cur 指针遍历链表，确保 cur 的下一个节点和下下个节点存在，以进行交换。
节点交换：通过临时变量 tmp1 和 tmp2 保存当前节点和后续节点，完成节点交换。
更新指针位置：移动 cur 指针到新的位置，准备进行下一对节点的交换。
返回新链表头：最终返回 dummy.next，即新的链表头。
此方法保证了只交换节点，不修改节点内部的值。
 */

function ListNode(val) {
  this.val = val
  this.next = null
}

var swapPairs = function (head) {
  let dummy = new ListNode(0) // 创建一个哑结点
  dummy.next = head // 哑结点指向链表头
  let cur = dummy // cur指针用于遍历链表
  while (cur.next && cur.next.next) {
    // 当cur的下一个节点和下下个节点存在时
    const tmp1 = cur.next // tmp1指向cur的下一个节点
    const tmp2 = cur.next.next.next // tmp2指向cur的下下下个节点
    cur.next = cur.next.next // cur的下一个节点指向原来的下下个节点
    cur.next.next = tmp1 // 新的下一个节点的下一个节点指向tmp1（即原来的下一个节点）
    tmp1.next = tmp2 // tmp1的下一个节点指向tmp2（即原来的下下下个节点）
    cur = cur.next.next // cur指针移动到新的位置，准备进行下一次交换
  }
  return dummy.next // 返回新的链表头（哑结点的下一个节点）
}

// 示例用法
const head = new ListNode(1)
head.next = new ListNode(2)
head.next.next = new ListNode(3)
head.next.next.next = new ListNode(4)

const newHead = swapPairs(head)
let current = newHead
while (current !== null) {
  console.log(current.val) // 输出: 2 1 4 3
  current = current.next
}
