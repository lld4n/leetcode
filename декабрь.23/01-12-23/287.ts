function findDuplicate(nums: number[]): number {
  nums = nums.sort((a, b) => a - b);
  for (let i = 0; i < nums.length - 1; i++) {
    if (nums[i] === nums[i + 1]) return nums[i];
  }
  return 0;
}
