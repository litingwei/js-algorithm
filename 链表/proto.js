// const obj = {}
// const func = () => {}
// const arr = []
const instanceOf = (A, B) => {
  let p = A
  while (p) {
    if (p === B.prototype) {
      return true
    }
    p = p.__proto__
  }
  return false
}
