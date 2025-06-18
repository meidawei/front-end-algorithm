/**
 * @param {number[]} nums
 * @return {number[][]}
 */

//  编写一个递归函数
function backtrack(list, temp, nums) {
  // 1. 终止条件
  if (temp.length === nums.length) {
    return list.push([...temp])
  }
  for (let i = 0; i < nums.length; i++) {
    // 找到一个不在temp里面的数字
    if (temp.includes(nums[i])) {
      continue
    }
    temp.push(nums[i])
    // 递归函数，将数字依次push进数组
    backtrack(list, temp, nums)
    temp.pop()
    // 放进去一个元素
    // 执行递归公式，递归函数
    // 撤回这个元素
  }
}
var permute = function (nums) {
  let list = []
  backtrack(list, [], nums)
  return list
}
