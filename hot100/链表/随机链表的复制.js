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
/*
深拷贝一个带有随机指针的链表，可以使用以下两种遍历的方法：

复制每个节点并将其插入到原节点之后
更新随机指针
分离新旧链表
具体步骤如下：

遍历原链表，对于每个节点，创建一个新节点并插入到当前节点的后面，使得新节点紧跟在原节点之后。
遍历链表，更新新节点的随机指针，使其指向对应的复制节点。
分离新旧链表，将新节点提取出来形成新链表，并恢复原链表。
*/
/*
特殊情况处理：如果原链表为空，直接返回空。
复制节点并插入：
遍历链表，对于每个节点，创建一个新节点，将其插入到当前节点之后。
例如，原链表为 A -> B -> C，处理后变为 A -> A' -> B -> B' -> C -> C'。
处理 random 指针：
再次遍历链表，设置新节点的 random 指针。新节点的 random 指向原节点的 random 所指向的新节点。
例如，如果 A.random -> C，则 A'.random -> C'。
分离链表：
再次遍历链表，分离出新链表，同时恢复原链表。
例如，经过分离后，新链表为 A' -> B' -> C'，原链表恢复为 A -> B -> C。
最终返回新链表的头节点。
*/
var copyRandomList = function (head) {
  if (head === null) return null // 如果原链表为空，直接返回空

  let cur = head

  // 第一步：复制每个节点并将新节点插入到原节点之后
  // 原链表为 A -> B -> C，处理后变为 A -> A' -> B -> B' -> C -> C'
  while (cur) {
    const n1 = cur.next
    cur.next = new _Node(cur.val) // 创建新节点，值与当前节点相同
    cur.next.next = n1 // 将新节点插入到当前节点之后
    cur = n1 // 移动到下一个原节点
  }

  // 第二步：处理 random 指针
  let cur2 = head
  while (cur2) {
    cur2.next.random = cur2.random ? cur2.random.next : null // 新节点的 random 指向原节点的 random 所指向的新节点
    cur2 = cur2.next.next // 跳过新节点，移动到下一个原节点
  }

  // 第三步：分离新链表，同时恢复原链表
  let p1 = head
  let headNew = head.next // 新链表的头节点
  let p2 = headNew
  while (p1) {
    p1.next = p1.next.next // 恢复原链表的 next 指针
    p1 = p1.next // 移动到下一个原节点
    p2.next = p1 ? p1.next : null // 设置新链表的 next 指针
    p2 = p2.next // 移动到下一个新节点
  }

  return headNew // 返回新链表的头节点
}
