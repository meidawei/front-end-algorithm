/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} head
 * @return {boolean}
 */
var hasCycle = function (head) {
  // 使用es6新增的数据结构 Set
  // Set的一大特性是所有元素都是唯一的，没有重复的值
  let cache = new Set()
  while (head) {
    // 如果cache里面有重复值，返回true
    if (cache.has(head)) {
      return true
    } else {
      cache.add(head)
    }
    // 遍历一个head
    head = head.next
  }
  return false
}
