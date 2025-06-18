// 快速排序
// 给数组找一个标志位，比如我，所有人都给我比个头，比我高的，站我右边
// 比我矮的,站我左边
// 算法复杂度 O(nlogn)
function quickSort(arr) {
  // 如果数组长度小于等于1，直接返回
  if (arr.length <= 1) {
    return arr
  }

  // 取第一个元素作为基准
  const pivot = arr[0]

  // 分成两部分，左边是小于基准的，右边是大于等于基准的
  const left = []
  const right = []

  for (let i = 1; i < arr.length; i++) {
    if (arr[i] < pivot) {
      left.push(arr[i])
    } else {
      right.push(arr[i])
    }
  }

  // 递归调用快速排序，并合并结果
  //   return [...quickSort(left), pivot, ...quickSort(right)]
  // 使用字符串拼接方法
  return quickSort(left).concat(pivot, quickSort(right))
}
