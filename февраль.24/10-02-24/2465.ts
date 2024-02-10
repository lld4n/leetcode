function distinctAverages(nums: number[]): number {
  nums = nums.sort((a, b) => a - b);
  const set: Set<number> = new Set();
  while (nums.length !== 0) {
    set.add((nums.pop() + nums.shift()) / 2);
  }
  return set.size;
}
