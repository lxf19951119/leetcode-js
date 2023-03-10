/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {boolean}
 */
var isSameTree = function (p, q) {
  const same = (p, q) => {
    if (!p && !q) return true;
    if (!p || !q) return false;
    if (p.val !== q.val) {
      return false;
    }
    return same(p.left, q.left) && same(p.right, q.right);
  };
  same(p, q);
};
