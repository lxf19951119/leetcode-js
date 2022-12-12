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
var convertBST = function (root) {
  if (!root) return root;
  let sum = 0;
  const midOrder = function (node) {
    if (!node) return;
    midOrder(node.right);
    node.val = node.val + sum;
    sum = node.val;
    midOrder(node.left);
  };
  midOrder(root, 0);
  return root;
};
