/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function (nums) {
  nums.sort((a, b) => a - b);
  const len = nums.length;
  for (let i = 0; i < len; i++) {
    if (i === 0 && nums[0] !== nums[1]) {
      return nums[0];
    }
    if (i === len - 1 && nums[len - 1] !== nums[len - 2]) {
      return nums[len - 1];
    }
    if (nums[i] !== nums[i - 1] && nums[i] !== nums[i + 1]) {
      return nums[i];
    }
  }
};
