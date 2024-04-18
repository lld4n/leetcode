function thirdMax(nums: number[]): number {
  nums = Array.from(new Set(nums)).sort((a, b) => b - a);
  if (nums.length < 3) return Math.max(...nums);
  return nums[2];
}
