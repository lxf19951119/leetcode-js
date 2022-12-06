var findErrorNums = function(nums) {
	const map = new Map();
	for (let i = 0; i < nums.length; i++) {
		map.set(i+1, 0);
	}
	for (let val of nums) {
		const cur = map.get(val);
		map.set(val, cur + 1);
	}
	const ans = [];
	map.forEach((val, key) => {
		if (val === 2) {
			ans.unshift(key);
		} else if (val === 0) {
			ans.push(key);
		}
	});
	return ans;
};