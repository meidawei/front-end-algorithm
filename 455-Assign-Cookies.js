/**
 * @param {number[]} g
 * @param {number[]} s
 * @return {number}
 */
var findContentChildren = function (g, s) {
  // 孩子胃口先进行排序
  g = g.sort((a, b) => a - b)
  // 饼干大小进行排序
  s = s.sort((a, b) => a - b)
  // 饼干满足胃口尽可能大的小朋友
  let ret = 0
  // 饼干的最后一位
  let index = s.length - 1
  // 从右往左做对比，如果最右边的饼干能满足胃口最大的小朋友，则＋1
  for (let i = g.length - 1; i >= 0; i--) {
    if (index >= 0 && s[index] >= g[i]) {
      // 能满足一个小朋友胃口即+1
      ret++
      index--
    }
  }
  // 返回匹配的数量
  return ret
}
