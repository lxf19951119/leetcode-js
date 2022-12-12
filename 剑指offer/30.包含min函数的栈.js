/**
 * initialize your data structure here.
 */
var MinStack = function() {
	this.stack = [];
	this.orderStack = [];
};

/** 
 * @param {number} x
 * @return {void}
 */
MinStack.prototype.push = function(x) {
	this.stack.push(x);
	this.orderStack.push(x);
	this.orderStack.sort((a, b) => a-b);
};

/**
 * @return {void}
 */
MinStack.prototype.pop = function() {
	if (this.stack.length) {
		const popNum = this.stack.pop();
		const findIndex = this.orderStack.findIndex(item => item === popNum)
		this.orderStack.splice(findIndex, 1);
	}
};

/**
 * @return {number}
 */
MinStack.prototype.top = function() {
	return this.stack[this.stack.length - 1];
};

/**
 * @return {number}
 */
MinStack.prototype.min = function() {	
	return this.orderStack[0];
};

/**
 * Your MinStack object will be instantiated and called as such:
 * var obj = new MinStack()
 * obj.push(x)
 * obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.min()
 */