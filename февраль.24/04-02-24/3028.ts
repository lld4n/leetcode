function returnToBoundaryCount(nums: number[]): number {
  let pos = 0;
  let ans = 0;
  for (const item of nums) {
    pos += item;
    if (pos === 0) ans++;
  }
  return ans;
}
