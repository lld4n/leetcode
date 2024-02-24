function sumBase(n: number, k: number): number {
  let ans = 0;
  while (n >= k) {
    ans += n % k;
    n = Math.floor(n / k);
  }
  return ans + n;
}
