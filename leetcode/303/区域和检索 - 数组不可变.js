/**
 * @param {number[]} nums
 */
var NumArray = function (nums) {
  const n = nums.length;
  this.sums = new Array(n + 1).fill(0);
  for (let i = 0; i < n; i++) {
    this.sums[i + 1] = this.sums[i] + nums[i];
  }
};

NumArray.prototype.sumRange = function (i, j) {
  return this.sums[j + 1] - this.sums[i];
};

const res = new NumArray([1, 23]);
res.sumRange(0, 1);
console.log(res);
/**
 * Your NumArray object will be instantiated and called as such:
 * var obj = new NumArray(nums)
 * var param_1 = obj.sumRange(left,right)
 */
