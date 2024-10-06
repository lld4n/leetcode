function countElements(nums: number[]): number {
  let ans = 0;
  for (const item of nums) {
    let less;
    let great;
    for (const n of nums) {
      if (n < item) {
        less = n;
      }
      if (n > item) {
        great = n;
      }
    }
    if (less !== undefined && great !== undefined) {
      ans++;
    }
  }
  return ans;
}
