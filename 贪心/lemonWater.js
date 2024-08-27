export default (input) => {
  // 表示自己的钱箱
  let hand = []
  while (input.length) {
    let money = input.shift()
    if (money === 5) {
      hand.push(money)
    } else {
      hand.sort((a, b) => b - a)
      // 表示需要的钱
      let change = money - 5
      for (let i = 0; i < hand.length; i++) {
        if (hand[i] <= change) {
          change -= hand[i]
          // 删除手中的钱
          hand.splice(i, 1)
          i--
        }
        if (change === 0) break
      }
      // 如果change > 0 表示没有足够的钱
      if (change > 0) {
        return false
      } else {
        // 顾客的钱存起来
        hand.push(money)
      }
    }
  }
  return true
}
