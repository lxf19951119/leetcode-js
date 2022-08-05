/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function (s) {
  // while (s.length) {
  //   const ss = s;
  //   s = s.replace(/\(\)|\[\]|\{\}/g, "");
  //   if (ss === s) return false;
  // }
  // return true;
  const n = s.length;
  if (n % 2 === 1) {
    return false;
  }
  const pairs = new Map([
    [")", "("],
    ["]", "["],
    ["}", "{"],
  ]);
  const stk = [];
  for (let ch of s) {
    if (pairs.has(ch)) {
      if (!stk.length || stk[stk.length - 1] !== pairs.get(ch)) {
        return false;
      }
      stk.pop();
    } else {
      stk.push(ch);
    }
  }
  return !stk.length;
};
