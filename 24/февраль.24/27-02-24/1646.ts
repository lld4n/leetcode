function getMaximumGenerated(n: number): number {
  if (n === 0) return 0;
  const nums: number[] = new Array(n + 1).fill(0);
  nums[0] = 0;
  nums[1] = 1;
  for (let i = 0; i < nums.length; i++) {
    if (i * 2 <= n && i * 2 >= 2) {
      nums[i * 2] = nums[i];
    }
    if (i * 2 + 1 <= n && i * 2 + 1 >= 2) {
      nums[i * 2 + 1] = nums[i] + nums[i + 1];
    }
  }
  return Math.max(...nums);
}
