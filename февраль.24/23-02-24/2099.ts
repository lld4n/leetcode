function maxSubsequence(nums: number[], k: number): number[] {
  let list = [...nums].sort((a, b) => b - a).slice(0, k);
  const ans: number[] = [];
  for (const item of nums) {
    if (list.length === 0) break;
    const index = list.indexOf(item);
    if (index !== -1) {
      ans.push(item);
      list = [...list.slice(0, index), ...list.slice(index + 1)];
    }
  }
  return ans;
}
