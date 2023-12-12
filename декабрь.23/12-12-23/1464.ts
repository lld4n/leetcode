function maxProduct(nums: number[]): number {
  nums = nums.sort((a, b) => a - b);
  let answer = 0;
  for (let i = 0; i < nums.length - 1; i++) {
    answer = Math.max(answer, (nums[i] - 1) * (nums[i + 1] - 1));
  }
  return answer;
}
