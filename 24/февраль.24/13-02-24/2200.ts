function findKDistantIndices(nums: number[], key: number, k: number): number[] {
  const ans: number[] = [];
  for (let i = 0; i < nums.length; i++) {
    for (let j = 0; j < nums.length; j++) {
      if (nums[j] === key && Math.abs(j - i) <= k && !ans.includes(i)) {
        ans.push(i);
      }
    }
  }
  return ans;
}
