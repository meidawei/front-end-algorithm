function leftpad(str, length, ch) {
  let len = length - str.length + 1
  return Array(len).join(ch) + str
}

let s = 'hello'
// 共10位数，不够的位数用0来补
console.log(s.padStart(10, '0'))

console.log(leftpad('hello', 10, '0')) //00000hello

// 二分查找算法
function leftpad2(str, length, ch) {
  let len = length - str.length
  total = ''
  while (true) {
    if (len & 1) {
      total += ch
    }
    if (len == 1) {
      return total + str
    }
    ch += ch
    // 进一位
    len = len >> 1
  }
}

console.log(leftpad2('hello', 10, '0')) // 00000hello;

// 计算两个方法的运行时间
console.time('leftpad')
for (let i = 0; i < 100000; i++) {
  leftpad('hello', 1000, '0')
}
console.timeEnd('leftpad')

console.time('leftpad2')
for (let i = 0; i < 100000; i++) {
  leftpad2('hello', 1000, '0')
}
console.timeEnd('leftpad2')
