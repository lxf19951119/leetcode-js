/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var maxSlidingWindow = function (nums, k) {
	const res = [];
	const queue = new MonotonicQue(k);
	for (let i = 0; i < nums.length; i++) {
		queue.push(nums[i]);
		const j = i - k + 1;
		if (j >= 0) {
			const max = queue.getMax();
			res.push(max);
			queue.pop(nums[j])
		}
	}
};

//单调队列
class MonotonicQue {
	arr = [];
	push(num) {
		if (this.arr.length && num > this.arr[this.arr.length - 1]) {
			this.arr.pop();
		}
	}
	pop(num) {
		if (this.arr.length && num === this.arr[0]) {
			this.arr.shift();
		}
	}
	getMax() {
		if (this.arr.length) {
			return this.arr[0]
		}
		return null
	}
}