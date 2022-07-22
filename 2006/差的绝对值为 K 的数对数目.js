/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var countKDifference = function (nums, k) {
  const hashMap = new Map();
  let ans = 0;
  for (const num of nums) {
    ans += (hashMap.get(num + k) ?? 0) + (hashMap.get(num - k) ?? 0);
    hashMap.set(num, (hashMap.get(num) || 0) + 1);
  }
};

countKDifference([1, 2, 2, 1], 1);
