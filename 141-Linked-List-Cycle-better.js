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
  let slow = head
  let fast = head
  // 使用新套路
  // 就是一个快,一个慢,慢的跟快的追上了说明一定有环
  while (fast && fast.next) {
    fast = fast.next.next
    slow = slow.next
    if (slow == fast) return true
  }
  return false
}
