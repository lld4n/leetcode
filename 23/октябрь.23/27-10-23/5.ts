function longestPalindrome(s: string): string {
  function expand(left: number, right: number) {
    while (left >= 0 && right < s.length && s[left] === s[right]) {
      left--;
      right++;
    }

    return s.substring(left + 1, right);
  }
  let result = "";

  for (let i = 0; i < s.length; i++) {
    const e = expand(i, i);
    const od = expand(i, i + 1);

    if (e.length > result.length) {
      result = e;
    }
    if (od.length > result.length) {
      result = od;
    }
  }
  return result;
}
