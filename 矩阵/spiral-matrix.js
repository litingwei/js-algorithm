/**
 * 螺旋矩阵 力扣54
 * @param {number[][]} arr
 * @returns {number[]}
 */
export default (arr) => {
  let map = (arr, r = []) => {
    for (let i = 0, len = arr.length; i < len; i++) {
      if (i == 0) {
        r = r.concat(arr[i])
      } else if (i == arr.length - 1) {
        r = r.concat(arr[i].reverse())
      } else {
        let val = arr[i].pop()
        if (val !== undefined) r.push(val)
      }
    }
    arr.shift()
    arr.pop()
    for (let i = arr.length - 1; i >= 0; i--) {
      let val = arr[i].shift()
      if (val !== undefined) r.push(val) // 修复：检查 val 是否为 undefined
    }
    if (arr.length) {
      return map(arr, r)
    } else {
      return r
    }
  }
  return map(arr, [])
}
