function scoreOfString(s: string): number {
  let ans = 0;
  for (let i = 0; i < s.length - 1; i++) {
    ans += Math.abs(s[i].charCodeAt(0) - s[i + 1].charCodeAt(0));
  }
  return ans;
}
