function numDecodings(s: string): number {
  if (s[0] === "0") return 0;
  if (s.length === 1) return 1;
  if (s.length === 2) {
    if (Number(s[0] + s[1]) > 9 && Number(s[0] + s[1]) < 27) {
      if (s[1] === "0") return 1;
      else return 2;
    } else {
      if (s[1] === "0") return 0;
      return 1;
    }
  }
  const dp = new Array(s.length + 1).fill(0);
  dp[0] = 1;
  dp[1] = 1;

  for (let i = 2; i <= s.length; i++) {
    const one = Number(s.slice(i - 1, i));
    const two = Number(s.slice(i - 2, i));
    if (one > 0) {
      dp[i] += dp[i - 1];
    }
    if (two > 9 && two < 27) {
      dp[i] += dp[i - 2];
    }
  }
  return dp[s.length];
}
