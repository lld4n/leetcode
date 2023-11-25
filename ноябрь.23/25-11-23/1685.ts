function getSumAbsoluteDifferences(nums: number[]): number[] {
  let result: number[] = [];
  let left = nums[0];
  let right = 0;
  for (let i = 1; i < nums.length; i++) {
    right += nums[i];
  }

  result.push(right - nums[0] * (nums.length - 1));

  for (let i = 1; i < nums.length; i++) {
    left += nums[i];
    right -= nums[i];
    result.push(
      nums[i] * (i + 1) - left + (right - nums[i] * (nums.length - i - 1)),
    );
  }

  return result;
}
