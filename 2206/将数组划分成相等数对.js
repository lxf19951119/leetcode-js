/**
 * @param {number[]} nums
 * @return {boolean}
 */
var divideArray = function (nums) {
  const hashSet = new Set();
  for (let i = 0; i < nums.length; i++) {
    if (hashSet.has(nums[i])) {
      hashSet.delete(nums[i]);
    } else {
      hashSet.add(nums[i]);
    }
  }
  return hashSet.size === 0;
};

divideArray([3, 2, 3, 2, 2, 2]);
