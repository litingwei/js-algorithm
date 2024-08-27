export interface ILinkListNode {
  value: number
  next?: ILinkListNode
}
export function reverseLinkList(listNode: ILinkListNode): ILinkListNode {
  let prevNode: ILinkListNode | undefined = undefined
  let curNode: ILinkListNode | undefined = undefined
  let nextNode: ILinkListNode | undefined = listNode
  while (nextNode) {
    // 第一个元素
    if (curNode && !prevNode) {
      delete curNode.next
    }
    // 反转
    if (curNode && prevNode) {
      curNode.next = prevNode
    }
    // 整体向后移动
    prevNode = curNode
    curNode = nextNode
    nextNode = nextNode?.next
  }
  //  当 nextNode 为空时， 此时 curNode 尚未设置 next
  curNode!.next = prevNode
  return curNode!
}
export function createLinkList(arr: number[]): ILinkListNode {
  const length = arr.length
  if (length === 0) throw new Error('arr is empty')
  let curNode: ILinkListNode = {
    value: arr[length - 1],
  }
  if (length === 1) return curNode
  for (let i = length - 2; i >= 0; i--) {
    curNode = {
      value: arr[i],
      next: curNode,
    }
  }
  return curNode
}
const arr1 = [100, 200, 300, 400, 500]
const list = createLinkList(arr1)
console.info('list:', list)
const list1 = reverseLinkList(list)
console.info('list1:', list1)
