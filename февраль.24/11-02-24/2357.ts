function minimumOperations(nums: number[]): number {
  let ans = 0;
  nums = nums.filter((e) => e !== 0).sort((a, b) => a - b);
  while (nums.length !== 0) {
    const min = nums.shift();
    if (!min) return ans;
    ans++;
    for (let i = 0; i < nums.length; i++) {
      nums[i] -= min;
    }
    nums = nums.filter((e) => e !== 0).sort((a, b) => a - b);
  }
  return ans;
}
