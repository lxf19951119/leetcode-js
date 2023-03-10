/**
 * @param {string} s
 * @return {string[]}
 */
var findRepeatedDnaSequences = function (s) {
	const ans = [];
	const long = 10;
	const map = new Map();
	for (let i = 0; i < s.length - long + 1; i++) {
		const str = s.substring(i, i + long);
		map.set(str, (map.get(str) || 0) + 1);
		if (map.get(str) === 2) {
			ans.push(str)
		}
	}
	return ans;
};