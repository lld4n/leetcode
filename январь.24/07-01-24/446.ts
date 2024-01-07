function numberOfArithmeticSlices(nums: number[]): number {
  const n: number = nums.length;
  let totalCount: number = 0;

  // initialize an array of maps to store counts of subsequences
  const dp: Map<number, number>[] = new Array(n);

  for (let i = 0; i < n; i++) {
    dp[i] = new Map<number, number>();

    for (let j = 0; j < i; j++) {
      // calculate the difference between current and previous elements
      const diff: number = nums[i] - nums[j];

      // get the count of subsequences with the same difference ending at nums[j]
      const prevCount: number = dp[j].get(diff) || 0;

      // update count of subsequences ending at nums[i] with the same difference
      dp[i].set(diff, (dp[i].get(diff) || 0) + prevCount + 1);

      // accumulate the previous count to the total count
      totalCount += prevCount;
    }
  }

  return totalCount;
}
