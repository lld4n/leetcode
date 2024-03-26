function firstMissingPositive(nums: number[]): number {
  nums.unshift(-1);
  for (let j = 0; j < nums.length; j++) {
    if (nums[j] <= 0 || nums[j] >= nums.length) {
      nums[j] = 0;
    }
  }
  let i = 1;
  while (i < nums.length) {
    const cur = nums[i];
    if (cur <= 0) {
      i++;
    } else if (cur !== i) {
      if (nums[cur] < 0) {
        nums[i] = 0;
        i++;
      } else if (nums[cur] === 0) {
        nums[cur] = -1;
        nums[i] = 0;
        i++;
      } else {
        nums[i] = nums[cur];
        nums[cur] = -1;
      }
    } else {
      nums[i] = -1;
      i++;
    }
  }
  let ans = nums.length;
  for (let j = 1; j < nums.length; j++) {
    if (nums[j] === 0) {
      ans = j;
      break;
    }
  }

  return ans;
}
