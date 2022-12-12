/**
 * @param {string} columnTitle
 * @return {number}
 */
var titleToNumber = function (columnTitle) {
  let inc = 0;
  let total = 0;
  for (let i = columnTitle.length - 1; i >= 0; i--) {
    const num = columnTitle[i].charCodeAt() - "A".charCodeAt() + 1;
    total += num * 26 ** inc;
    inc++;
  }
  return total;
};

console.log(titleToNumber("AB"));
