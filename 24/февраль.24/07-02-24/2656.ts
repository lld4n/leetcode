function maximizeSum(nums: number[], k: number): number {
  const mm = Math.max(...nums);
  let ans = 0;
  for (let i = 0; i < k; i++) {
    ans += mm + i;
  }
  return ans;
}
