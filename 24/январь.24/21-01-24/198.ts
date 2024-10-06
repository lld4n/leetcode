function rob(nums: number[]): number {
  if (nums.length === 1) return nums[0];
  const list = new Array(nums.length);
  list[0] = nums[0];
  list[1] = nums[1];
  for (let i = 2; i < nums.length; i++) {
    list[i] = nums[i] + Math.max(...list.slice(0, i - 1));
  }

  return Math.max(...list);
}
