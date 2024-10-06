function combinationSum4(nums: number[], target: number): number {
  let dp: number[] = new Array(target + 1).fill(0);

  for (let elem of nums) {
    dp[elem] = 1;
  }

  for (let i = 2; i < dp.length; i++) {
    for (let elem of nums) {
      const value = i - elem;
      if (value > 0 && value <= target) {
        dp[i] += dp[value];
      }
    }
  }
  return dp[target];
}
