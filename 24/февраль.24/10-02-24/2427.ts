function commonFactors(a: number, b: number): number {
  let ans = 0;
  for (let i = 1; i <= Math.min(a, b); i++) {
    if (a % i === 0 && b % i === 0) ans++;
  }
  return ans;
}
