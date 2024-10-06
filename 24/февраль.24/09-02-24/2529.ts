function maximumCount(nums: number[]): number {
  let neg = 0;
  let pos = 0;
  for (const item of nums) {
    if (item > 0) pos++;
    if (item < 0) neg++;
  }
  return Math.max(neg, pos);
}
