class Difference {
  constructor(nums) {
    this.diff = new Array(nums.length);
    this.diff[0] = nums[0];
    for (let i = 1; i < nums.length; i++) {
      this.diff[i] = nums[i] - nums[i - 1];
    }
  }

  increment(i, j, val) {
    this.diff[i] += val;
    if (j + 1 < this.diff.length) {
      this.diff[j + 1] -= val;
    }
  }

  result() {
    const res = new Array(this.diff.length);
    res[0] = this.diff[0];
    for (let i = 1; i < this.diff.length; i++) {
      res[i] = res[i - 1] + this.diff[i];
    }
    return res;
  }
}

const res = new Difference([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
res.increment(3, 6, 10);
