// 621任务队列
// export default function taskQueue(tasks, n) {
//   let q = ''
//   let Q = {}
//   tasks.forEach((item) => {
//     if (Q[item]) {
//       Q[item]++
//     } else {
//       Q[item] = 1
//     }
//   })
//   while (true) {
//     let keys = Object.keys(Q)
//     if (!keys[0]) {
//       break
//     }
//     let tmp = []
//     for (let i = 0; i < n + 1; i++) {
//       let max = 0
//       let key
//       let pos
//       keys.forEach((item, idx) => {
//         if (Q[item] > max) {
//           max = Q[item]
//           key = item
//           pos = idx
//         }
//       })
//       if (key) {
//         tmp.push(key)
//         keys.splice(pos, 1)
//         Q[key]--
//         if (Q[key] < 1) {
//           delete Q[key]
//         }
//       } else {
//         break
//       }
//     }
//     q += tmp.join('').padEnd(n + 1, '-')
//   }
//   q = q.replace(/-+$/, '')
//   return q.length
// }
export default function taskQueue(tasks, n) {
  const arr = Array(26).fill(0)
  tasks.forEach((item) => {
    arr[item.charCodeAt(0) - 'A'.charCodeAt(0)]++
  })
  // 降序排序
  arr.sort((a, b) => b - a)
  const maxCount = arr[0]
  //   空闲槽位
  let slot = (maxCount - 1) * n
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] > 0) {
      // 如果当前任务数量大于maxCount-1，则需要减去maxCount-1
      slot -= Math.min(arr[i], maxCount - 1)
    }
  }
  return tasks.length + Math.max(0, slot)
}
