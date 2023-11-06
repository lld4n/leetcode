function removeDuplicates(nums: number[]): number {
  const set = new Set(nums);
  nums = Array.from(set);
  return set.size;
}
