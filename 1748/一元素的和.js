/**
 * @param {number[]} nums
 * @return {number}
 */
var sumOfUnique = function (nums) {
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
  hashMap.forEach((value, key) => {
    if (value == 1) {
      res += key;
    }
  });
  return res;
};

sumOfUnique([1, 2, 3, 4, 1, 2]);
