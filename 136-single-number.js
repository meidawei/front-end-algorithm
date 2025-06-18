/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function (nums) {
  // ^ 异或
  // 表示两个数相同位数不同才为1，否则为0
  // 0111 0111
  // 0000
  let ret = 0
  nums.forEach((num) => {
    ret ^= num
  })
  return ret
}
