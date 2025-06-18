/**
 * @param {character[][]} board
 * @param {string} word
 * @return {boolean}
 */
var exist = function (board, word) {
  // 输入的终止条件
  if (board.length === 0) {
    return false
  }
  if (word.length === 0) {
    return true
  }
  // 开始循环找
  let row = board.length
  let col = board[0].length
  for (let i = 0; i < row; i++) {
    for (let j = 0; j < col; j++) {
      // 每一个字母都可以作为起点搜索
      // 0就是当前查询的字母索引
      // find就是递归函数
      const ret = find(i, j, 0)
      // 如果有一个符合条件，既可以返回true
      if (ret) {
        return ret
      }
    }
  }
  // 表示没有一个符合条件
  return false

  // 编写递归函数
  function find(i, j, cur) {
    if (i >= row || i < 0) {
      return false
    }
    if (j >= col || j < 0) {
      return false
    }
    let letter = board[i][j]
    if (letter !== word[cur]) {
      return false
    }
    // 只剩最后一个了，也是匹配的
    if (cur == word.length - 1) {
      return true
    }
    // 选择当前的字母
    board[i][j] = null
    // 进行下一步
    // 进行递归运算
    const ret =
      find(i + 1, j, cur + 1) ||
      find(i - 1, j, cur + 1) ||
      find(i, j + 1, cur + 1) ||
      find(i, j - 1, cur + 1)
    // 使用回溯运算
    board[i][j] = letter
    return ret
  }
}
