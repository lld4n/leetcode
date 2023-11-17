function minPairSum(nums: number[]): number {
  nums = nums.sort((a, b) => a - b);

  let answer = -1;
  if (nums.length % 2 === 0) {
    for (let i = 0; i < nums.length / 2; i++) {
      answer = Math.max(answer, nums[i] + nums[nums.length - 1 - i]);
    }
  } else {
    for (let i = 0; i < nums.length / 2 - 1; i++) {
      answer = Math.max(answer, nums[i] + nums[nums.length - 1 - i]);
    }
  }

  return answer;
}
