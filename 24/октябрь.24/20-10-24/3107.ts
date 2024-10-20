function minOperationsToMakeMedianK(
  nums: number[],
  k: number,
): number {
  nums = nums.sort((a, b) => a - b);

  let center =
    nums.length % 2 === 0
      ? Math.ceil(nums.length / 2)
      : Math.floor(nums.length / 2);

  let ans = 0;

  for (let i = 0; i <= center; i++) {
    if (nums[i] > k) {
      ans += nums[i] - k;
    }
  }

  for (let i = center; i < nums.length; i++) {
    if (nums[i] < k) {
      ans += k - nums[i];
    }
  }

  return ans;
}
