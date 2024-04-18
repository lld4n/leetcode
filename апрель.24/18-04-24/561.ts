function arrayPairSum(nums: number[]): number {
  nums = nums.sort((a, b) => b - a);
  let ans = 0;
  for (let i = 1; i < nums.length; i += 2) {
    ans += nums[i];
  }
  return ans;
}
