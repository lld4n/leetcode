function applyOperations(nums: number[]): number[] {
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] === nums[i + 1]) {
      nums[i] *= 2;
      nums[i + 1] = 0;
    }
  }
  const ans: number[] = [];
  let c = 0;
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] === 0) c++;
    else ans.push(nums[i]);
  }
  return [...ans, ...new Array(c).fill(0)];
}
