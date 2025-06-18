/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} val
 * @return {ListNode}
 */
var removeElements = function (head, val) {
  // 使用哨兵节点写法
  // 可以减少很多if/else写法
  let ele = {
    next: head,
  }
  let p = ele
  while (p.next) {
    p.next.val === val ? (p.next = p.next.next) : (p = p.next)
  }
  return ele.next
}
