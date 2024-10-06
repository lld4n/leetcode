function leftRightDifference(nums: number[]): number[] {
  const answer: number[] = [];
  for (let i = 0; i < nums.length; i++) {
    let left = 0;
    for (let j = 0; j < i; j++) {
      left += nums[j];
    }
    let right = 0;
    for (let j = i + 1; j < nums.length; j++) {
      right += nums[j];
    }
    answer.push(Math.abs(right - left));
  }
  return answer;
}
