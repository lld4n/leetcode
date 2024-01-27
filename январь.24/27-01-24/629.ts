const MOD = 10 ** 9 + 7;

function kInversePairs(n: number, k: number): number {
  const MOD = Math.pow(10, 9) + 7;

  const dp = new Array(n + 1).fill(0).map(() => new Array(k + 1).fill(0));
  dp[0][0] = 1;

  for (let i = 1; i <= n; i++) {
    dp[i][0] = 1;
    for (let j = 1; j <= k; j++) {
      dp[i][j] = (dp[i][j - 1] + dp[i - 1][j]) % MOD;
      if (j >= i) {
        dp[i][j] = (dp[i][j] - dp[i - 1][j - i] + MOD) % MOD;
      }
    }
  }

  return dp[n][k];
}
