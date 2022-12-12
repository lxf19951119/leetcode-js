/**
 * @param {number[][]} matrix
 * @return {number[]}
 */
var spiralOrder = function (matrix) {
  const m = matrix.length;
  const n = matrix[0].length;
  let upper = 0;
  let lower = m - 1;
  let left = 0;
  let right = n - 1;
  const ans = [];
  while (ans.length < m * n) {
    if (upper <= lower) {
      // 在顶部从左向右遍历
      for (let i = left; i <= right; i++) {
        ans.push(matrix[upper][i]);
      }
      // 上边界下移
      upper++;
    }

    if (left <= right) {
      // 在右侧从上向下遍历
      for (let i = upper; i <= lower; i++) {
        ans.push(matrix[i][right]);
      }
      // 右边界左移
      right--;
    }

    if (upper <= lower) {
      // 在底部从右向左遍历
      for (let i = right; i >= left; i--) {
        ans.push(matrix[lower][i]);
      }
      // 下边界上移
      lower--;
    }

    if (left <= right) {
      // 在左侧从下向上遍历
      for (let i = lower; i >= upper; i--) {
        ans.push(matrix[i][left]);
      }
      // 左边界右移
      left++;
    }
  }
  return ans;
};
