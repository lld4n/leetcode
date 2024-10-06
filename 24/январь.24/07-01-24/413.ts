function numberOfArithmeticSlices(nums: number[]): number {
  const difference: number[] = [];
  for (let i = 0; i < nums.length - 1; i++) {
    difference.push(nums[i + 1] - nums[i]);
  }
  let answer = 0;
  let cur = 1;
  for (let i = 0; i < difference.length - 1; i++) {
    if (difference[i] === difference[i + 1]) {
      cur++;
    } else {
      answer += Math.floor((cur * (cur - 1)) / 2);
      cur = 1;
    }
  }
  answer += Math.floor((cur * (cur - 1)) / 2);
  return answer;
}
