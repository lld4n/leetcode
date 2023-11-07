function isMonotonic(nums: number[]): boolean {
  let status = nums[1] - nums[0];

  for (let i = 0; i < nums.length - 1; i++) {
    const statusBuffer = nums[i + 1] - nums[i];
    if (status === 0) {
      status = statusBuffer;
    } else {
      if (status < 0 && statusBuffer > 0) {
        return false;
      } else if (status > 0 && statusBuffer < 0) {
        return false;
      }
    }
  }
  return true;
}
