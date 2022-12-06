var maxArea = function(height) {
	let i = 0;
	let j = height.length - 1;
	let max = 0;
	while (i < j) {
		max = height[i] < height[j]
			?
			Math.max(max, (j - i) * height[i++])
			:
			Math.max(max, (j - i) * height[j--]);
	}
	return max
};