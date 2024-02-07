function semiOrderedPermutation(nums: number[]): number {
  const maxIn = nums.indexOf(Math.max(...nums));
  const minIn = nums.indexOf(Math.min(...nums));
  return nums.length - maxIn + minIn - 1 - (maxIn < minIn ? 1 : 0);
}
