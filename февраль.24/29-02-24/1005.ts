function largestSumAfterKNegations(
  nums: number[],
  k: number,
): number {
  nums = nums.sort((a, b) => a - b);
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] < 0 && k > 0) {
      nums[i] = -nums[i];
      k--;
    }
  }

  if (k % 2 === 0) return _.sum(nums);
  else {
    return _.sum(nums) - Math.min(...nums) * 2;
  }
}
