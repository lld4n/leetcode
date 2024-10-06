function searchInsert(nums: number[], target: number): number {
  let left = 0;
  let right = nums.length;
  while (left < right) {
    let m = Math.floor((left + right) / 2);
    if (nums[m] === target) {
      return m;
    }

    if (nums[m] < target) {
      left = m + 1;
    } else {
      right = m;
    }
  }
  console.log(left, right);
  return right;
}
