function decompressRLElist(nums: number[]): number[] {
  const ans: number[] = [];
  for (let i = 0; i < nums.length; i += 2) {
    while (nums[i] > 0) {
      ans.push(nums[i + 1]);
      nums[i]--;
    }
  }
  return ans;
}
