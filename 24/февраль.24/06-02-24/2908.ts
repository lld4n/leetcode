function minimumSum(nums: number[]): number {
  let sum = -1;
  for (let i = 0; i < nums.length; i++) {
    for (let j = i + 1; j < nums.length; j++) {
      for (let k = j + 1; k < nums.length; k++) {
        if (nums[i] < nums[j] && nums[k] < nums[j]) {
          let s = nums[i] + nums[j] + nums[k];
          if (sum === -1 || s < sum) sum = s;
        }
      }
    }
  }
  return sum;
}
