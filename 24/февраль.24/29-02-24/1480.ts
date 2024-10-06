function runningSum(nums: number[]): number[] {
  const ans: number[] = [];
  for (let i = 0; i < nums.length; i++) {
    ans.push(_.sum(nums.slice(0, i + 1)));
  }
  return ans;
}
