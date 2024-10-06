function divideArray(nums: number[], k: number): number[][] {
  nums = nums.sort((a, b) => a - b);
  let ans: number[][] = [];
  for (let i = 0; i < nums.length; i += 3) {
    if (
      Math.abs(nums[i] - nums[i + 1]) <= k &&
      Math.abs(nums[i] - nums[i + 2]) <= k &&
      Math.abs(nums[i + 1] - nums[i + 2]) <= k
    ) {
      ans.push([nums[i], nums[i + 1], nums[i + 2]]);
    }
  }
  return ans.length === nums.length / 3 ? ans : [];
}
