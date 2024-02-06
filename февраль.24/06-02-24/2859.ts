function sumIndicesWithKSetBits(nums: number[], k: number): number {
  let ans = 0;
  for (let i = 0; i < nums.length; i++) {
    if (
      i
        .toString(2)
        .split("")
        .filter((e) => e === "1").length === k
    )
      ans += nums[i];
  }
  return ans;
}
