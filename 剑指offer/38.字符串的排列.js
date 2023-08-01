

function backtrack(current, remaining) {
	if (remaining.length <= 0) {
		this.result.push(current);
	}
	//set去重
	const set = new Set();
	for (let i = 0; i < remaining.length; i++) {
		if (set.has(remaining[i])) {
			continue
		}
		set.add(remaining[i]);
		const nextCurrent = current + remaining[i];
		const nextRemaining = remaining.slice(0, i) + remaining.slice(i + 1, remaining.length);
		backtrack(nextCurrent, nextRemaining)
	}
}

var permute = function (str) {
	this.result = [];
	backtrack("", str);
	return this.result;
}