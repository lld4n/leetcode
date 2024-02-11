function findSubarrays(nums: number[]): boolean {
  const s: number[] = [];
  for (let i = 0; i < nums.length - 1; i++) {
    const buffer = nums[i] + nums[i + 1];
    if (s.includes(buffer)) return true;
    s.push(buffer);
  }
  return false;
}
