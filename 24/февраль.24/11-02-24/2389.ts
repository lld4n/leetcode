function answerQueries(nums: number[], queries: number[]): number[] {
  nums = nums.sort((a, b) => a - b);

  const ans: number[] = [];
  for (const q of queries) {
    let buffer = 0;
    for (let i = 0; i < nums.length; i++) {
      buffer += nums[i];
      if (buffer > q) {
        buffer = -1;
        ans.push(i);
        break;
      }
    }
    if (buffer !== -1) {
      ans.push(nums.length);
    }
  }
  return ans;
}
