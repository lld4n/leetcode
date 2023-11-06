function threeSum(nums: number[]): number[][] {
  nums = nums.sort((a, b) => a - b);
  let result: number[][] = [];
  for (let i = 0; i < nums.length; i++) {
    if (i > 0 && nums[i] === nums[i - 1]) continue;
    let left = i + 1;
    let right = nums.length - 1;

    while (left < right) {
      const buffer = nums[i] + nums[left] + nums[right];
      if (buffer === 0) {
        result.push([nums[i], nums[left], nums[right]]);
        while (left < right && nums[left] === nums[left + 1]) left++;
        while (left < right && nums[right] === nums[right - 1]) right--;
        left++;
        right--;
      } else if (buffer < 0) {
        left++;
      } else {
        right--;
      }
    }
  }

  return result;
}
