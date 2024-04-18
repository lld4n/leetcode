function longestPalindrome(s: string): number {
  const map: { [k: string]: number } = {};
  for (const l of s) map[l] = map[l] ? map[l] + 1 : 1;
  let ans = 0;
  for (const k in map) {
    if (map[k] % 2 === 0) {
      ans += map[k];
    } else {
      if (ans % 2 === 0) {
        ans += map[k];
      } else {
        ans += map[k] - 1;
      }
    }
  }
  return ans;
}
