function isGood(nums: number[]): boolean {
  nums = nums.sort((a, b) => a - b);
  const lst = nums.pop();
  if (lst !== nums.length) return false;
  for (let i = 0; i < nums.length; i++) {
    if (i + 1 !== nums[i]) return false;
  }
  return true;
}
