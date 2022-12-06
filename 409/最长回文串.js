var longestPalindrome = function (s) {
	const map = new Map();
	for (let k of s) {
		if (!map.has(k)) {
			map.set(k, 1);
		} else {
			const num = map.get(k);
			map.set(k, num + 1);
		}
	}
	let res = 0;
	let flag = false;
	map.forEach((val) => {
		if (val % 2 !== 0) {
			res = res + val - 1;
			flag = true;
		} else if (val % 2 === 0) {
			res += val;
		} 
	})
	return flag ? res + 1 : res;
};