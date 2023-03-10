/**
 * @param {string} word1
 * @param {string} word2
 * @return {number}
 */
var minDistance = function (word1, word2) {
  dp = (i, j) => {
    if (i === -1) return j + 1;
    if (j === -1) return i + 1;
    if (word1[i] === word2[j]) return dp(i - 1, j - 1);
    return Math.min(dp(i, j - 1) + 1, dp(i - 1, j) + 1, dp(i - 1, j - 1) + 1);
  };
  return dp(word1.length - 1, word2.length - 1);
};
