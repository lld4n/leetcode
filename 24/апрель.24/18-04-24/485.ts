function findMaxConsecutiveOnes(nums: number[]): number {
  let c = 0;
  let ans = 0;
  for (const item of nums) {
    if (item === 1) {
      c++;
    } else {
      ans = Math.max(ans, c);
      c = 0;
    }
  }
  ans = Math.max(ans, c);
  return ans;
}
