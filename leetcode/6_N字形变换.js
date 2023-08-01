/**
 * @param {string} s
 * @param {number} numRows
 * @return {string}
 */
var convert = function (s, numRows) {
	if (numRows === 1) return s;
	const rows = [];
	let cur = 0;
	let down = true;
	for (let j = 0; j < s.length; j++) {
		rows[cur] += s[j];
		if (down) {
			if (cur < numRows - 1) {
				cur++
			} else {
				cur--;
				down = false;
			}
		} else {
			if (cur > 0) {
				cur--;
			} else {
				cur++;
				down = true;
			}
		}
	}
	return rows.join("")
};