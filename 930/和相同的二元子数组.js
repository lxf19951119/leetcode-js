/**
 * @param {number[]} nums
 * @param {number} goal
 * @return {number}
 */
var numSubarraysWithSum = function (nums, goal) {
  let sum = 0;
  let ans = 0;
  const hashMap = new Map();
  for (let num of nums) {
    hashMap.set(sum, (hashMap.get(sum) || 0) + 1);
    sum += num;
    ans += hashMap.get(sum - goal) || 0;
  }
  return ans;
};
