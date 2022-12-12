/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var moveZeroes = function (nums) {
  if (nums.length <= 1) return nums;
  let slow = 0;
  let fast = 0;
  while (fast < nums.length) {
    if (nums[fast] !== 0) {
      const val = nums[slow];
      nums[slow] = nums[fast];
      nums[fast] = val;
      slow++;
    }
    fast++;
  }
  return nums;
};
