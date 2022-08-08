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
 * @return {number}
 */
var minDepth = function (root) {
  function traverse(root, level) {
    if (!root) return 0;
    if (!level) {
      level = 1;
    }
    if (root.left && root.right) {
      return Math.min(
        traverse(root.left, level + 1),
        traverse(root.right, level + 1)
      );
    } else if (root.left || root.right) {
      return traverse(root.left || root.right, level + 1);
    } else {
      return level;
    }
  }
  return traverse(root);
};
