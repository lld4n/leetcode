function minSubsequence(nums: number[]): number[] {
  const ans: number[] = [...nums.sort((a, b) => b - a)];
  const d: number[] = [];
  while (_.sum(ans) > _.sum(d)) {
    const item = ans.pop();
    if (item) d.push(item);
  }
  ans.push(d.pop()!);
  return ans;
}
