function minOperations(nums: number[]): number {
  let ans = 0;
  for (let i = 0; i < nums.length - 1; i++) {
    while (nums[i + 1] <= nums[i]) {
      ans++;
      nums[i + 1]++;
    }
  }
  return ans;
}
