/**
 * @param {number} n
 * @return {boolean}
 */
var isPowerOfTwo = function (n) {
  // 使用位运算方法实现
  // n    1000
  // n-1  0111
  // n & n-1 0000
  // 按位与 就是对应的数都为1才是1，否则为0
  return (n > 0) & ((n & (n - 1)) === 0)
}
