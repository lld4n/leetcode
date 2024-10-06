function minimumRightShifts(nums: number[]): number {
  const n = nums.length;
  nums = nums.concat(nums);
  for (let i = 0; i < n; i++) {
    let c = 0;
    for (let j = i; j < nums.length - 1; j++) {
      if (c + 1 === n) {
        if (i === 0) return i;
        return n - i;
      }
      if (nums[j] > nums[j + 1]) {
        break;
      } else {
        c++;
      }
    }
  }
  return -1;
}
