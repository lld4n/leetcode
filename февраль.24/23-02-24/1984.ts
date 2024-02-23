function minimumDifference(nums: number[], k: number): number {
  nums = nums.sort((a, b) => a - b);
  let ans = Infinity;
  for (let i = 0; i < nums.length - k + 1; i++) {
    ans = Math.min(nums[i + k - 1] - nums[i], ans);
  }
  return ans === Infinity ? 0 : ans;
}
