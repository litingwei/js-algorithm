/** 给你一个链表，删除链表的倒数第 n 个结点，并且返回链表的头结点。
 */
function ListNode(val, next) {
  this.val = val === undefined ? 0 : val
  this.next = next === undefined ? null : next
}

var removeNthFromEnd = function (head, n) {
  // 创建一个虚拟头节点，值为-1，用于处理边界情况（比如删除第一个节点）
  const dummy = new ListNode(-1)
  // 将虚拟头节点连接到原链表
  dummy.next = head

  // latter指针指向虚拟头节点，用于找到要删除节点的前一个节点
  let latter = dummy
  // cur指针指向当前头节点，指向待删除的节点
  let cur = head
  // former指针指向头节点，用于先走n步
  let former = head

  // former指针先向前移动n步
  for (let i = 0; i < n; i++) {
    former = former.next
  }

  // former、latter和cur同时移动，直到former到达末尾
  // 这样latter就能指向待删除节点的前一个节点
  while (former) {
    latter = latter.next
    cur = cur.next
    former = former.next
  }

  // 删除目标节点：将latter的next指向cur的下一个节点
  latter.next = cur.next

  // 返回新的头节点（去除虚拟头节点）
  return dummy.next
}

/**
 * 这段代码使用了快慢指针的思想，具体工作原理如下：

1. **创建虚拟头节点（dummy node）**：
   - 通过创建值为-1的虚拟头节点，可以统一处理删除第一个节点和其他节点的情况
   - 避免了需要特殊处理删除头节点的情况

2. **设置三个指针**：
   - `former`：快指针，用于先走n步
   - `latter`：慢指针，最终会指向待删除节点的前一个节点
   - `cur`：指向待删除的节点

3. **指针移动过程**：
   - 首先，`former`先向前移动n步
   - 然后，`former`、`latter`和`cur`同时向前移动
   - 当`former`到达链表末尾（为null）时，`cur`正好指向待删除的节点

4. **删除节点**：
   - 通过改变`latter.next = cur.next`完成节点的删除操作

5. **返回结果**：
   - 返回`dummy.next`作为新的头节点

举个例子：
```
输入：1->2->3->4->5, n=2
目标：删除倒数第2个节点（节点4）

过程：
1. 初始状态：dummy->1->2->3->4->5
2. former先走2步：former指向3
3. 同时移动直到former为null：
   - former: 3->4->5->null
   - latter: dummy->1->2->3
   - cur: 1->2->3->4
4. 删除节点4：latter.next = cur.next
5. 最终结果：1->2->3->5
```

这种解法的时间复杂度是O(N)，空间复杂度是O(1)，其中N是链表的长度。
 */
