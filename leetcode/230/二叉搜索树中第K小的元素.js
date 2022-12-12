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
 * @param {number} k
 * @return {number}
 */
var kthSmallest = function (root, k) {
  const arr = [];
  function find(root, k) {
    if (!root) return;
    find(root.left, k);
    arr.push(root.val);
    find(root.right, k);
  }
  find(root, k);
  return arr[k - 1];
};
