/**
 * @param {number[]} bills
 * @return {boolean}
 */
var lemonadeChange = function (bills) {
  // 使用暴力解法就可以了
  // 这道题非常简单
  let fiveNum = 0
  let tenNum = 0
  // 遍历数组，表示所有的收款顺序都执行一遍
  for (let i = 0; i < bills.length; i++) {
    let bill = bills[i]
    if (bill === 5) {
      // 收到5块钱
      ++fiveNum
    } else if (bill === 10) {
      // 收到10块钱
      if (fiveNum > 0) {
        // 如果有5块钱
        --fiveNum
        ++tenNum
      } else {
        // 表示无法找零
        return false
      }
    } else {
      // 收到20的情况
      if (tenNum > 0 && fiveNum > 0) {
        // 有两种找零方式
        // 1张10元 1张5元
        // 3张5元
        --fiveNum
        --tenNum
      } else if (fiveNum > 2) {
        fiveNum -= 3
      } else {
        // 无法找零
        return false
      }
    }
  }
  // 成功找零
  return true
}
