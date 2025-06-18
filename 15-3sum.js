/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function (nums) {
  // 找到a b c
  // 无序的数组里，查找目标和大小相关，就可以看下是否可以利用排序降低复杂度
  // 排序 n*lgn
  let list = []
  // 首先进行排序
  // 最小+最大之和，如果比目标值大，说明我们要缩小这个值，最大值左移动，否则，最小右移
  nums.sort((a, b) => a - b)
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] === nums[i - 1]) {
      continue
    }
    // nums[i]为基准，找另外两个数组，数组之和 - nums[i]
    let left = i + 1
    let right = nums.length - 1
    while (left < right) {
      if (nums[left] + nums[i] + nums[right] === 0) {
        // 命中
        // 将命中数组push进list
        list.push([nums[left], nums[right], nums[i]])
        // 继续找
        while (nums[left] === nums[left + 1]) {
          // 由于排序了，相同的数组都在一起
          left++
        }
        left++
        // 右边也是一样
        while (nums[right] === nums[right - 1]) {
          right--
        }
        right--
      } else if (nums[left] + nums[right] + nums[i] > 0) {
        // 数字变大了，需要小一些做判断
        right--
      } else {
        // 数字太小了，需要大一点的
        left++
      }
    }
  }
  return list
}
