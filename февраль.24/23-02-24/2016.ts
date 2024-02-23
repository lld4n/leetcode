function maximumDifference(nums: number[]): number {
  let ans = -1;
  for (let i = 0; i < nums.length; i++) {
    for (let j = i + 1; j < nums.length; j++) {
      if (nums[i] < nums[j]) ans = Math.max(ans, nums[j] - nums[i]);
    }
  }
  return ans;
}
