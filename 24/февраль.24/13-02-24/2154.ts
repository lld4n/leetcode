function findFinalValue(nums: number[], original: number): number {
  let i = -1;
  while (i !== nums.length) {
    i++;
    if (nums[i] === original) {
      original *= 2;
      i = -1;
    }
  }
  return original;
}
