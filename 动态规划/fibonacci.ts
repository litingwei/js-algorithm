// 递归
// function fibonacci(n: number): number {
//   if (n <= 0) return 0
//   if (n === 1) return 1
//   return fibonacci(n - 1) + fibonacci(n - 2)
// }
// console.log(fibonacci(10))

export function fibonacci(n) {
  if (n <= 0) return 0
  if (n === 1) return 1
  let n1 = 1
  let n2 = 0
  let res = 0
  for (let i = 2; i <= n; i++) {
    res = n1 + n2
    // 记录中间结果
    n2 = n1
    n1 = res
  }
  return res
}
console.log(fibonacci(10))
