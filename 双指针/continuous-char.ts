interface IRes {
  char: string
  length: number
}
// 求连续最多的字符和次数,时间复杂度O(n) 嵌套循环
function findContinuousChar1(str): IRes {
  const res: IRes = {
    char: '',
    length: 0,
  }
  const length = str.length
  if (length === 0) return res
  let tempLength = 0 // 临时记录当前连续字符的长度
  for (let i = 0; i < length; i++) {
    tempLength = 0 // 重置
    for (let j = i; j < length; j++) {
      if (str[i] === str[j]) {
        tempLength++
      }
      if (str[i] !== str[j] || j === length - 1) {
        if (tempLength > res.length) {
          res.char = str[i]
          res.length = tempLength
        }
        if (i < length - 1) i = j - 1 // 跳步
        break
      }
    }
  }

  return res
}

// 双指针
function findContinuousChar2(str) {
  const res: IRes = {
    char: '',
    length: 0,
  }
  const length = str.length
  if (length === 0) return res
  let tempLength = 0
  let i = 0
  let j = 0
  for (; i < length; i++) {
    if (str[i] === str[j]) {
      tempLength++
    }
    if (str[i] !== str[j] || i === length - 1) {
      if (tempLength > res.length) {
        res.char = str[j]
        res.length = tempLength
      }
      tempLength = 0
      if (i < length - 1) {
        j = i // 让 j 追上i
        i-- // 细节
      }
    }
  }
  return res
}

// const str = 'aabbcccddeeee11223'
// console.log(findContinuousChar2(str))

let str = ''
for (let i = 0; i < 1000000; i++) {
  str += i.toString()
}
console.time('findContinuousChar1')
findContinuousChar1(str)
console.timeEnd('findContinuousChar1')

console.time('findContinuousChar2')
findContinuousChar2(str)
console.timeEnd('findContinuousChar2')
