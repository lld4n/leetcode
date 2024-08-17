function maxPoints(points: number[][]): number {
  const m = points.length;
  const n = points[0].length;

  let dp = [...points[0]];

  for (let i = 1; i < m; i++) {
    const newDp = new Array(n).fill(0);

    let left = 0;
    for (let j = 0; j < n; j++) {
      left = Math.max(left - 1, dp[j]);
      newDp[j] = left + points[i][j];
    }

    let right = 0;
    for (let j = n - 1; j >= 0; j--) {
      right = Math.max(right - 1, dp[j]);
      newDp[j] = Math.max(newDp[j], right + points[i][j]);
    }

    dp = newDp;
  }

  return Math.max(...dp);
}
