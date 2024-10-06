function largestDivisibleSubset(nums: number[]): number[] {
  nums = nums.sort((a, b) => a - b);
  let ans: number[][] = [[nums[0]]];
  for (let i = 1; i < nums.length; i++) {
    let buffer: number[] = [];
    for (let j = 0; j < ans.length; j++) {
      if (nums[i] % Math.max(...ans[j]) === 0) {
        if (buffer.length < ans[j].length + 1) {
          buffer = [...ans[j], nums[i]];
        }
      }
    }
    if (buffer.length === 0) {
      buffer = [nums[i]];
    }
    ans.push(buffer);
  }
  ans = ans.sort((a, b) => b.length - a.length);
  return ans[0];
}
