function targetIndices(nums: number[], target: number): number[] {
  nums = nums.sort((a, b) => a - b);
  const ans: number[] = [];
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] === target) {
      ans.push(i);
    }
  }
  return ans;
}
