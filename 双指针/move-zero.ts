// 移动0到数组的末尾
export function moveZeroe2(arr: number[]) {
  const length = arr.length
  if (length == 0) return
  let i = 0
  let j = -1 // 指向第一个0
  for (let i = 0; i < length; i++) {
    if (arr[i] === 0) {
      if (j < 0) {
        j = i
      }
    }
    if (arr[i] !== 0 && j >= 0) {
      const n = arr[i]
      arr[i] = arr[j]
      arr[j] = n
      j++
    }
  }
}
