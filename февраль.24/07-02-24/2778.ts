function sumOfSquares(nums: number[]): number {
  let ans = 0;
  for (let i = 0; i < nums.length; i++) {
    if (nums.length % (i + 1) === 0) ans += nums[i] ** 2;
  }
  return ans;
}
