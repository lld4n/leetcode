function largestPerimeter(nums: number[]): number {
  let answer = 0;
  nums = nums.sort((a, b) => b - a);
  for (let i = 0; i < nums.length - 2; i++) {
    if (nums[i] < nums[i + 1] + nums[i + 2]) {
      answer = Math.max(answer, nums[i] + nums[i + 1] + nums[i + 2]);
    }
  }
  return answer;
}
