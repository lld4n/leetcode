function sumCounts(nums: number[]): number {
  let ans = 0;
  for (let i = 0; i < nums.length; i++) {
    for (let j = i + 1; j <= nums.length; j++) {
      const buffer: Set<number> = new Set(nums.slice(i, j));
      ans += buffer.size ** 2;
    }
  }
  return ans;
}
