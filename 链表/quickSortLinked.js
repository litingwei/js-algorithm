// // 声明链表节点
// class Node {
//   constructor(value) {
//     this.val = value
//     this.next = undefined
//   }
// }
// // 声明链表
// class NodeList {
//   constructor(arr) {
//     let head = new Node(arr[0])
//     let next = head
//     for (let i = 1; i < arr.length; i++) {
//       next.next = new Node(arr[i])
//       next = next.next
//     }
//     return head
//   }
// }

// // 交换两个节点
// let swap = (a, b) => {
//   let temp = a.val
//   a.val = b.val
//   b.val = temp
// }

// let partion = (begin, end) => {
//   let val = begin.val
//   let p = begin
//   let q = begin.next
//   while (q !== end) {
//     if (q.val < val) {
//       p = p.next
//       swap(p, q)
//     }
//     q = q.next
//   }
//   // 交换基准值和第一个小于基准值的节点
//   swap(p, begin)
//   return p
// }

// export default function sort(begin, end) {
//   if (begin !== end) {
//     let pivot = partion(begin, end)
//     sort(begin, pivot)
//     sort(pivot.next, end)
//   }
// }

// export { Node, NodeList }

function ListNode(val, next) {
  this.val = val
  this.next = next
}

function quickSort(head) {
  if (!head || !head.next) {
    return head
  }
  let pivot = head
  let lesserHead = new ListNode(0)
  let greaterHead = new ListNode(0)
  let lesser = lesserHead
  let greater = greaterHead

  let current = head.next
  while (current) {
    if (current.val < pivot.val) {
      lesser.next = current
      lesser = lesser.next
    } else {
      greater.next = current
      greater = greater.next
    }
    current = current.next
  }
  lesser.next = null
  greater.next = null
  let sortedLesser = quickSort(lesserHead.next)
  let sortedGreater = quickSort(greaterHead.next)
  return concatenate(sortedLesser, pivot, sortedGreater)
}
function concatenate(lesser, pivot, greater) {
  let head = lesser || pivot
  let current = head
  while (current && current.next) {
    current = current.next
  }
  if (current) {
    current.next = pivot
  } else {
    head = pivot
  }
  pivot.next = greater
  return head
}
