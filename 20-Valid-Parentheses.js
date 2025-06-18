/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function (s) {
  let stack = []
  let obj = {
    '(': ')',
    '{': '}',
    '[': ']',
  }
  for (let i = 0; i < s.length; i++) {
    const ele = s[i]
    if (ele in obj) {
      // 将左括号推入栈
      stack.push(ele)
    } else {
      // 反括号场景
      // 栈是后进先出
      if (ele != obj[stack.pop()]) {
        // 不匹配
        // 表示字符无效
        return false
      }
    }
  }
  return !stack.length
}
