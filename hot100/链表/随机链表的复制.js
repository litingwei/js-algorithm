/**
 * 给你一个长度为 n 的链表，每个节点包含一个额外增加的随机指针 random ，该指针可以指向链表中的任何节点或空节点。

构造这个链表的 深拷贝。 深拷贝应该正好由 n 个 全新 节点组成，其中每个新节点的值都设为其对应的原节点的值。新节点的 next 指针和 random 指针也都应指向复制链表中的新节点，并使原链表和复制链表中的这些指针能够表示相同的链表状态。复制链表中的指针都不应指向原链表中的节点 。

例如，如果原链表中有 X 和 Y 两个节点，其中 X.random --> Y 。那么在复制链表中对应的两个节点 x 和 y ，同样有 x.random --> y 。

返回复制链表的头节点。

用一个由 n 个节点组成的链表来表示输入/输出中的链表。每个节点用一个 [val, random_index] 表示：

val：一个表示 Node.val 的整数。
random_index：随机指针指向的节点索引（范围从 0 到 n-1）；如果不指向任何节点，则为  null 。
你的代码 只 接受原链表的头节点 head 作为传入参数。


 */

// 链表节点的定义
class Node {
  constructor(val, next = null, random = null) {
    this.val = val
    this.next = next
    this.random = random
  }
}

/**
 * @param {Node} head
 * @return {Node}
 */
function copyRandomList(head) {
  if (!head) return null

  // 第一步：在每个原始节点后创建一个新节点
  let current = head
  while (current) {
    const newNode = new Node(current.val)
    newNode.next = current.next
    current.next = newNode
    current = newNode.next
  }

  // 第二步：处理random指针
  current = head
  while (current) {
    if (current.random) {
      // current.next是新节点，current.random.next是random指向的节点的副本
      current.next.random = current.random.next
    }
    current = current.next.next
  }

  // 第三步：分离原始链表和复制的链表
  const dummy = new Node(0)
  let newCurrent = dummy
  current = head

  while (current) {
    // 保存下一个原始节点
    const nextOrig = current.next.next

    // 复制的节点
    const copy = current.next
    newCurrent.next = copy
    newCurrent = copy

    // 恢复原始链表
    current.next = nextOrig
    current = nextOrig
  }

  return dummy.next
}

// 测试代码
function printList(head) {
  const values = []
  const randoms = []
  let current = head
  const nodeMap = new Map()
  let index = 0

  // 第一遍遍历：记录节点位置
  while (current) {
    nodeMap.set(current, index)
    values.push(current.val)
    current = current.next
    index++
  }

  // 第二遍遍历：记录random指向
  current = head
  while (current) {
    if (current.random) {
      randoms.push(`${nodeMap.get(current)}->${nodeMap.get(current.random)}`)
    } else {
      randoms.push(`${nodeMap.get(current)}->null`)
    }
    current = current.next
  }

  return {
    values: values.join(' -> '),
    randoms: randoms.join(', '),
  }
}

// 创建测试用例
function createTestCase() {
  const node1 = new Node(7)
  const node2 = new Node(13)
  const node3 = new Node(11)
  const node4 = new Node(10)
  const node5 = new Node(1)

  node1.next = node2
  node2.next = node3
  node3.next = node4
  node4.next = node5

  node1.random = null
  node2.random = node1
  node3.random = node4
  node4.random = node2
  node5.random = node1

  return node1
}

// 运行测试
const original = createTestCase()
console.log('Original List:', printList(original))

const copied = copyRandomList(original)
console.log('Copied List:', printList(copied))

/** 
这个解决方案采用了三步走的策略：

1. 首先，在每个原始节点后面创建一个新节点，形成一个交错的链表。
   - 比如原始链表是 A->B->C 变成 A->A'->B->B'->C->C'

2. 然后，设置新节点的random指针
   - 利用 `current.random.next` 找到对应的复制节点

3. 最后，分离原始链表和复制的链表
   - 把穿插的链表拆分成两个独立的链表
   - 恢复原始链表的结构
   - 得到复制链表的完整结构

代码中还包含了测试用例和打印函数，可以验证复制是否成功。时间复杂度是O(n)，空间复杂度是O(1)（不考虑返回的新链表所需的空间）。

你可以用以下方式测试这段代码：
```javascript
const original = createTestCase();
const copied = copyRandomList(original);
```

要验证复制是否成功，可以检查：
1. 复制链表中的节点值是否与原链表相同
2. random指针的指向关系是否与原链表一致
3. 复制链表的节点是否都是新的（不与原链表共享节点）

需要我解释代码中的任何具体部分吗？
*/
