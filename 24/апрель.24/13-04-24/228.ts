function summaryRanges(nums: number[]): string[] {
  if (nums.length === 0) return [];
  let s = 0;
  let e = 0;
  const ans: string[] = [];
  for (let i = 1; i < nums.length; i++) {
    if (nums[i] - nums[e] > 1) {
      if (s === e) {
        ans.push(String(nums[s]));
      } else {
        ans.push(String(nums[s]) + "->" + String(nums[e]));
      }
      s = i;
      e = i;
    } else {
      e++;
    }
  }
  if (s === e) {
    ans.push(String(nums[s]));
  } else {
    ans.push(String(nums[s]) + "->" + String(nums[e]));
  }
  return ans;
}
