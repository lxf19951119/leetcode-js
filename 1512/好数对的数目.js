/**
 * @param {number[]} nums
 * @return {number}
 */
var numIdenticalPairs = function (nums) {
  const hashMap = new Map();
  for (let i = 0; i < nums.length; i++) {
    const numInMap = hashMap.get(nums[i]);
    if (!numInMap) {
      hashMap.set(nums[i], 1);
    } else {
      hashMap.set(nums[i], numInMap + 1);
    }
  }
  let res = 0;
  hashMap.forEach((value) => {
    const addNum = factorial(value);
    res += addNum;
  });
  return res;
};

var factorial = function (num) {
  if (num == 1) return 0;
  return num - 1 + factorial(num - 1);
};

numIdenticalPairs([1, 1, 1, 1]);
