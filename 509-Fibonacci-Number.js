/**
 * @param {number} n
 * @return {number}
 */
var fib = function (n) {
  // 使用递归解决问题
  if (n <= 1) {
    return n
  }
  return fib(n - 1) + fib(n - 2)
}
