function distinctDifferenceArray(nums: number[]): number[] {
  const ans: number[] = [];
  for (let i = 0; i < nums.length; i++) {
    ans.push(
      new Set(nums.slice(0, i + 1)).size - new Set(nums.slice(i + 1)).size,
    );
  }
  return ans;
}
