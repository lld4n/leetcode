function hasTrailingZeros(nums: number[]): boolean {
  const count = nums.filter((e) => e % 2 === 0).length;
  return count >= 2;
}
