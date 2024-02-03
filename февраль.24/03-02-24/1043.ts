function maxSumAfterPartitioning(arr: number[], k: number): number {
  const n = arr.length;
  const dp = new Array(n).fill(0);
  dp[0] = arr[0];

  for (let i = 1; i < n; i++) {
    let maxSoFar = arr[i];
    for (let j = i; j >= 0; j--) {
      maxSoFar = Math.max(maxSoFar, arr[j]);
      const size = i - j + 1;
      if (size > k) break;

      const sum = size * maxSoFar;
      const prevSum = j - 1 >= 0 ? dp[j - 1] : 0;
      dp[i] = Math.max(dp[i], sum + prevSum);
    }
  }

  return dp[n - 1];
}
