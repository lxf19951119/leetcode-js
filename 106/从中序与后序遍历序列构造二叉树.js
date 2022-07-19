/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */

//存放节点对应的映射
const indexMap = new Map();

/**
 * @param {number[]} inorder
 * @param {number[]} postorder
 * @return {TreeNode}
 */
var buildTree = function (inorder, postorder) {
  for (let i = 0; i < inorder.length; i++) {
    indexMap.set(inorder[i], i);
  }
  return build(
    inorder,
    0,
    inorder.length - 1,
    postorder,
    0,
    postorder.length - 1
  );
};

var build = function (inorder, inStart, inEnd, postorder, postStart, postEnd) {
  if (inStart > inEnd) return null;
  //root节点对应的值就是前序遍历数组的第一个元素
  const rootVal = postorder[postEnd];
  //获取中序遍历中根节点的索引
  const index = indexMap.get(rootVal);
  const root = new TreeNode(rootVal);
  const leftSize = index - inStart;
  root.left = build(
    inorder,
    inStart,
    index - 1,
    postorder,
    postStart,
    postStart + leftSize - 1
  );
  root.right = build(
    inorder,
    index + 1,
    inEnd,
    postorder,
    postStart + leftSize,
    postEnd - 1
  );
  return root;
};
