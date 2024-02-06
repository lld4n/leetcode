function differenceOfSums(n: number, m: number): number {
  let ans = 0;
  for (let i = 1; i <= n; i++) {
    if (i % m === 0) {
      ans -= i;
    } else {
      ans += i;
    }
  }
  return ans;
}
