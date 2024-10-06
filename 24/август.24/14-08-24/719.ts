function smallestDistancePair(nums: number[], k: number): number {
  const mm = Math.max(...nums);
  const d = Array.from({ length: mm + 1 }).map(() => 0);
  for (let i = 0; i < nums.length; i++) {
    for (let j = i + 1; j < nums.length; j++) {
      const di = Math.abs(nums[j] - nums[i]);
      d[di]++;
    }
  }
  for (let i = 0; i < d.length; i++) {
    k -= d[i];
    if (k <= 0) return i;
  }
  return -1;
}
