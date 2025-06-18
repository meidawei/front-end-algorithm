/**
 * @param {string} path
 * @return {string}
 */
var simplifyPath = function (path) {
  let stack = []
  let puths = path.split('/')
  for (let i = 0; i < puths.length; i++) {
    const p = puths[i]
    // 当遇到 .. 则相当于向上返回一级
    // 则将栈中元素出栈
    // 栈后进先出
    if (p == '..') {
      stack.pop()
    } else if (p && p != '.') {
      // 元素入栈
      stack.push(p)
    }
  }
  // 返回拼接好的字符串
  return '/' + stack.join('/')
}
