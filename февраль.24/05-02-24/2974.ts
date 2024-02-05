function numberGame(nums: number[]): number[] {
  nums = nums.sort((a, b) => a - b);
  const arr: number[] = [];
  for (let i = 0; i < nums.length; i += 2) {
    arr.push(nums[i + 1]);
    arr.push(nums[i]);
  }
  return arr;
}
