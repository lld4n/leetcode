function numRollsToTarget(n: number, k: number, target: number): number {
  const MODULO = 10 ** 9 + 7;
  const dp = Array.from({ length: n + 1 }, () =>
    Array.from({ length: target + 1 }, () => 0),
  );

  dp[0][0] = 1;

  for (let i = 1; i <= n; i++) {
    for (let j = 1; j <= target; j++) {
      let count = 0;
      for (let d = 1; d <= k; d++) {
        if (j - d >= 0) {
          count = (count + dp[i - 1][j - d]) % MODULO;
        }
      }
      dp[i][j] = count;
    }
  }
  return dp[n][target];
}
