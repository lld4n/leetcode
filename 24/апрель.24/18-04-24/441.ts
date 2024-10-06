function arrangeCoins(n: number): number {
  let i = 1;
  let ans = 0;
  while (n >= i) {
    ans++;
    n -= i;
    i++;
  }
  return ans;
}
