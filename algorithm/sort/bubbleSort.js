// 冒泡排序算法
function bubbleSort(arr) {
  // 每个人和右边人比较，如果你比他高，就交换位置，否则不动
  let len = arr.length - 1
  for (let i = 0; i < len; i++) {
    // 因为经历过一次比较后，最大的数已经在最后了
    // 所以每次比较的长度都要减去i
    for (let j = 0; j < len - i; j++) {
      if (arr[j] > arr[j + 1]) {
        // 交换位置
        // let temp = arr[j];
        // arr[j] = arr[j + 1];
        // arr[j + 1] = temp;
        // 使用es6简化写法
        ;[arr[j], arr[j + 1]] = [arr[j + 1], arr[j]]
      }
    }
  }
  return arr
}
