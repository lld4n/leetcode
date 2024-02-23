function canBeIncreasing(nums: number[]): boolean {
  let sorted = true;
  for (let i = 0; i < nums.length - 1; i++) {
    if (nums[i] >= nums[i + 1]) {
      sorted = false;
    }
  }
  if (sorted) return true;

  for (let i = 0; i < nums.length; i++) {
    const orig = [...nums.slice(0, i), ...nums.slice(i + 1)];
    sorted = true;
    for (let j = 0; j < orig.length - 1; j++) {
      if (orig[j] >= orig[j + 1]) {
        sorted = false;
      }
    }
    if (sorted) return true;
  }
  return false;
}
