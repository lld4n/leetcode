function removeElement(nums: number[], val: number): number {
  const c = nums.filter((e) => e !== val);
  for (let i = 0; i < nums.length; i++) {
    if (c[i] !== undefined) nums[i] = c[i];
    else nums[i] = -1;
  }
  nums.length = c.length;
  return nums.length;
}
