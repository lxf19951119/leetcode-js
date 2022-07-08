/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
let maxDiameter = 0;
/**
 * @param {TreeNode} root
 * @return {number}
 */
var diameterOfBinaryTree = function (root) {
  maxDepth(root);
  return maxDiameter;
};

var maxDepth = function (root) {
  if (root === null) {
    return 0;
  }
  let leftMax = maxDepth(root.left);
  let rightMax = maxDepth(root.right);
  const myDiameter = leftMax + rightMax;
  maxDiameter = Math.max(maxDiameter, myDiameter);
  return 1 + Math.max(leftMax, rightMax);
};
