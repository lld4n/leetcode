function kLengthApart(nums: number[], k: number): boolean {
  let s = nums.indexOf(1);
  for (let i = s + 1; i < nums.length; i++) {
    if (nums[i] === 1) {
      const l = i - s - 1 < 0 ? 0 : i - s - 1;
      if (l < k) {
        return false;
      }
      s = i;
    }
  }
  return true;
}
