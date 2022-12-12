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
 * @return {TreeNode[]}
 */
var findDuplicateSubtrees = function (root) {
  const res = [];
  const hashMap = new Map();
  collect(root);
  return res;

  function collect(root) {
    if (!root) return "#";
    const str = root.val + collect(root.right) + collect(root.left);
    strInMap = hashMap.get(str);
    if (!strInMap) {
      hashMap.set(str, 1);
    } else if (strInMap == 1) {
      hashMap.set(str, strInMap + 1);
      res.push(root);
    }
    return str;
  }
};
