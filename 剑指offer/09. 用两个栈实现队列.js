var CQueue = function() {
	this.inStack = [];
	this.outStack = [];
};

/** 
 * @param {number} value
 * @return {void}
 */
CQueue.prototype.appendTail = function(value) {
	this.inStack.push(value);
};

/**
 * @return {number}
 */
CQueue.prototype.deleteHead = function() {
	if (!this.inStack.length) return -1;
	while (this.inStack.length) {
		this.outStack.push(this.inStack.pop());
	}
 	const res =	this.outStack.pop();
	while (this.outStack.length) {
		this.inStack.push(this.outStack.pop());
	}
	return res;
};

/**
 * Your CQueue object will be instantiated and called as such:
 * var obj = new CQueue()
 * obj.appendTail(value)
 * var param_2 = obj.deleteHead()
 */