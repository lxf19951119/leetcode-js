/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */

/**
 * @param {number[]} nums
 * @return {TreeNode}
 */
var constructMaximumBinaryTree = function (nums) {
  if (!nums.length) return null;
  const max = Math.max(...nums);
  const maxIndex = nums.findIndex((item) => item === max);
  const leftNums = nums.slice(0, maxIndex);
  const rightNums = nums.slice(maxIndex + 1);
  const root = new TreeNode(max);
  root.left = constructMaximumBinaryTree(leftNums);
  root.right = constructMaximumBinaryTree(rightNums);
  return root;
};
