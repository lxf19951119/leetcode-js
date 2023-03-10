var lengthOfLongestSubstring = function (s) {
  //滑动窗口法
  //计算长度
  const len = s.length;
  //右指针
  let rp = -1; ans = 0;
  const set = new Set();
  for (let i = 0; i < len; i++) {
    if (i !== 0) {
      set.delete(s.charAt(i - 1));
    }
    while (rp + 1 < len && !set.has(s.charAt(rp + 1))) {
      set.add(s.charAt(rp + 1));
      rp++;
    }
    ans = Math.max(ans, rp - i + 1);
  }
  return ans;
};
