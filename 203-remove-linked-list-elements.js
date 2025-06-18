/**
 * @param {ListNode} head
 * @param {number} val
 * @return {ListNode}
 */
var removeElements = function (head, val) {
  // 递归解法
  // 如果是空数组，直接返回空数组
  if (head == null) {
    return head
  }
  head.next = removeElements(head.next, val)
  // 如果索引的值跟val相同，则next指向下一个节点
  return head.val === val ? head.next : head
}
