function nthUglyNumber(n: number): number {
  let ans: number[] = [1];
  let q = 0;

  const set: Set<number> = new Set();

  for (let i = 1; i < n; i++) {
    if (!set.has(ans[q] * 2)) {
      ans.push(ans[q] * 2);
      set.add(ans[q] * 2);
    }
    if (!set.has(ans[q] * 3)) {
      ans.push(ans[q] * 3);
      set.add(ans[q] * 3);
    }
    if (!set.has(ans[q] * 5)) {
      ans.push(ans[q] * 5);
      set.add(ans[q] * 5);
    }
    q++;
  }

  ans = ans.sort((a, b) => a - b);
  return ans[n - 1];
}
