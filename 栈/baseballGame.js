/**
 * 棒球比赛
 */
export default (arr) => {
  let result = []
  arr.forEach((item) => {
    if (item === 'C') {
      if (result.length > 0) result.pop()
    } else if (item === 'D') {
      if (result.length > 0) result.push(result[result.length - 1] * 2)
    } else if (item === '+') {
      if (result.length > 1)
        result.push(result[result.length - 1] + result[result.length - 2])
    } else {
      result.push(Number(item))
    }
  })
  return result.reduce((a, b) => a + b, 0)
}
