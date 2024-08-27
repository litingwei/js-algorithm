// 快速排序 使用splice
export function quickSort1(arr: number[]): number[] {
  const length = arr.length
  if (length === 0) return arr
  const midIndex = Math.floor(length / 2)
  const midValue = arr.splice(midIndex, 1)[0]
  const left: number[] = []
  const right: number[] = []
  //   需要用arr.length 因为arr已被修改
  for (let i = 0; i < arr.length; i++) {
    const n = arr[i]
    if (n < midValue) {
      left.push(n)
    } else {
      right.push(n)
    }
  }
  return quickSort1(left).concat([midValue], quickSort1(right))
}
const arr1 = [1, 6, 2, 7, 3, 8, 4, 9, 5]
console.info(quickSort1(arr1))

// 使用slice
export function quickSort2(arr: number[]): number[] {
  const length = arr.length
  if (length === 0) return arr
  const midIndex = Math.floor(length / 2)
  const midValue = arr.slice(midIndex, midIndex + 1)[0]
  const left: number[] = []
  const right: number[] = []
  for (let i = 0; i < length; i++) {
    if (i !== midIndex) {
      const n = arr[i]
      if (n < midValue) {
        left.push(n)
      } else {
        right.push(n)
      }
    }
  }
  return quickSort2(left).concat([midValue], quickSort2(right))
}
console.info(quickSort2(arr1))

const arr2: number[] = []
for (let i = 0; i < 100000; i++) {
  arr2.push(Math.floor(Math.random() * 10000))
}
console.time('quickSort1')
quickSort1(arr2)
console.timeEnd('quickSort1')
console.time('quickSort2')
quickSort2(arr2)
console.timeEnd('quickSort2')
