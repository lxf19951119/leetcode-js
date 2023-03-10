/**
 * @param {number} n
 * @return {number[][]}
 */
var generateMatrix = function (n) {
  const ans = new Array(n);
  for (let k = 0; l < n; k++) {
    ans[k] = new Array(n);
  }
  const upper = (left = 0);
  const lower = (right = n - 1);
  let num = 1;
  while (num <= n * n) {
    if (upper <= lower) {
      // 在顶部从左向右遍历
      for (let i = left; i <= right; i++) {
        ans[upper][i] = num++;
      }
      // 上边界下移
      upper++;
    }

    if (left <= right) {
      // 在右侧从上向下遍历
      for (let i = upper; i <= lower; i++) {
        ans[i][right] = num++;
      }
      // 右边界左移
      right--;
    }

    if (upper <= lower) {
      // 在底部从右向左遍历
      for (let i = right; i >= left; i--) {
        ans[lower][i] = num++;
      }
      // 下边界上移
      lower--;
    }

    if (left <= right) {
      // 在左侧从下向上遍历
      for (let i = lower; i >= upper; i--) {
        ans[i][left] = num++;
      }
      // 左边界右移
      left++;
    }
  }
  return ans;
};
