/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {TreeNode}
 */
var invertTree = function (root) {
  // 没有头节点直接返回 []
  if (root == null) {
    return root
  }

  // 递归子问题
  // 所有的子树都进行翻转
  ;[root.left, root.right] = [invertTree(root.right), invertTree(root.left)]
  return root
}
