function maxProduct(s: string): number {
  const d1 = manaker(s);
  const l = new Array(s.length + 5).fill(0);
  const r = new Array(s.length + 5).fill(0);
  let ans = 0;

  for (let i = 0; i < s.length; i++) {
    r[i - d1[i] + 1] = Math.max(r[i - d1[i] + 1], 2 * d1[i] - 1);
    l[i + d1[i] - 1] = Math.max(l[i + d1[i] - 1], 2 * d1[i] - 1);
  }

  for (let i = 1; i < s.length; i++) r[i] = Math.max(r[i], r[i - 1] - 2);

  for (let i = s.length - 2; i >= 0; i--) l[i] = Math.max(l[i], l[i + 1] - 2);

  for (let i = 1; i < s.length; i++) l[i] = Math.max(l[i], l[i - 1]);

  for (let i = 0; i < s.length; i++) ans = Math.max(ans, l[i] * r[i + 1]);

  return ans;
}

function manaker(s: string): number[] {
  let dp = new Array(s.length).fill(0);
  let l = 0;
  let r = 0;
  for (let i = 1; i < s.length; i++) {
    if (i < r) {
      dp[i] = Math.min(r - i + 1, dp[l + r - i]);
    }
    let k = dp[i];
    while (i + k < s.length && i - k >= 0 && s[i + k] === s[i - k]) k++;
    dp[i] = k - 1;
    if (i + k > r) {
      r = i + k;
      l = i - k;
    }
  }
  return dp;
}
