function findMaxK(nums: number[]): number {
  let ans = -1;
  for (const item of nums) {
    if (item > 0 && nums.includes(-item)) {
      ans = Math.max(item, ans);
    }
  }
  return ans;
}
