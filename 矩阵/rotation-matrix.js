/** 旋转矩阵
 *
 */
export default (arr) => {
  // 获取n的维度
  let vecor = arr.length
  // 垂直翻转
  for (let i = 0, len = vecor / 2; i < len; i++) {
    for (let j = 0; j < vecor; j++) {
      let temp = arr[i][j]
      arr[i][j] = arr[vecor - 1 - i][j]
      arr[vecor - 1 - i][j] = temp
    }
  }
  // 对角线翻转
  for (let i = 0; i < vecor; i++) {
    for (let j = 0; j < i; j++) {
      let temp = arr[i][j]
      arr[i][j] = arr[j][i]
      arr[j][i] = temp
    }
  }
  return arr
}
