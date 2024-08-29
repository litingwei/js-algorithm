/**
 * 给定一个非负整数 numRows，生成「杨辉三角」的前 numRows 行。

在「杨辉三角」中，每个数是它左上方和右上方的数的和。
 */
/**
 * 「杨辉三角」的特点是：

每一行的第一个和最后一个元素都是 1。
其他元素等于上一行的元素之和，即 triangle[i][j] = triangle[i-1][j-1] + triangle[i-1][j]。
要生成前 numRows 行的杨辉三角，我们可以：

初始化一个空的二维数组 triangle 用来存储结果。
对于每一行 i，创建一个长度为 i+1 的数组来存储该行的元素。
设置每行的第一个和最后一个元素为 1。
对于行内的其他元素，按照 triangle[i][j] = triangle[i-1][j-1] + triangle[i-1][j] 来计算。
将该行加入到 triangle 中。
最后，返回生成的杨辉三角。
 */
var generate = function (numRows) {
  // 初始化结果数组
  const triangle = []

  // 遍历每一行
  for (let i = 0; i < numRows; i++) {
    // 初始化当前行
    const row = new Array(i + 1).fill(1)

    // 填充当前行的中间部分
    for (let j = 1; j < i; j++) {
      row[j] = triangle[i - 1][j - 1] + triangle[i - 1][j]
    }

    // 将当前行加入到结果数组中
    triangle.push(row)
  }

  // 返回生成的杨辉三角
  return triangle
}
/**
 * 代码注释与解释
triangle 数组：用来存储每一行的元素，即最终的杨辉三角。
row 数组：表示当前行。对于第 i 行，我们初始化一个长度为 i+1 的数组，并默认所有元素为 1。
边界条件：每一行的第一个和最后一个元素必定为 1，所以我们只需计算中间部分的元素。
填充中间元素：通过上面两行的元素之和来确定当前行的中间元素。
triangle.push(row)：将每一行生成后加入到最终的结果数组中。
 */
console.log(generate(5))
