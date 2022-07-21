/**
 * @param {string} sentence
 * @return {boolean}
 */
var checkIfPangram = function (sentence) {
  const hashMap = new Map();
  for (let i = 97; i <= 122; i++) {
    hashMap.set(i, 0);
  }
  for (let j = 0; j < sentence.length; j++) {
    const charCode = sentence[j].charCodeAt();
    hashMap.delete(charCode);
  }
  return hashMap.size === 0;
};
