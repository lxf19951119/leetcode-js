function TreeNode(val, left, right) {
  this.val = val === undefined ? 0 : val;
  this.left = left === undefined ? null : left;
  this.right = right === undefined ? null : right;
}
//存放节点对应的映射
const indexMap = new Map();
/**
 * @param {number[]} preorder
 * @param {number[]} inorder
 * @return {TreeNode}
 */
var buildTree = function (preorder, inorder) {
  for (let i = 0; i < inorder.length; i++) {
    indexMap.set(inorder[i], i);
  }
  return build(
    preorder,
    0,
    preorder.length - 1,
    inorder,
    0,
    inorder.length - 1
  );
};

var build = function (preorder, preStart, preEnd, inorder, inStart, inEnd) {
  if (preStart > preEnd) return null;
  //root节点对应的值就是前序遍历数组的第一个元素
  const rootVal = preorder[preStart];
  //获取中序遍历中根节点的索引
  const index = indexMap.get(rootVal);
  const root = new TreeNode(rootVal);
  const leftSize = index - inStart;
  root.left = build(
    preorder,
    preStart + 1,
    preStart + leftSize,
    inorder,
    inStart,
    index - 1
  );
  root.right = build(
    preorder,
    preStart + leftSize + 1,
    preEnd,
    inorder,
    index + 1,
    inEnd
  );
  return root;
};
console.log(buildTree([3, 9, 20, 15, 7], [9, 3, 15, 20, 7]));
