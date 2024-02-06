function findKOr(nums: number[], k: number): number {
  const ans: number[] = [];
  for (let i = 0; i < 32; i++) {
    let count = 0;
    for (const item of nums) {
      if (((2 ** i) & item) === 2 ** i) {
        count++;
      }
    }
    if (count >= k) ans.push(i);
  }
  return ans.reduce(
    (previousValue, currentValue) => previousValue + 2 ** currentValue,
    0,
  );
}
