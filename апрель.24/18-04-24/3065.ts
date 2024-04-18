function minOperations(nums: number[], k: number): number {
  nums = nums.sort((a, b) => a - b);
  let ans = 0;
  for (const item of nums) {
    if (item < k) ans++;
  }
  return ans;
}
