function maximumScore(nums: number[], multipliers: number[]): number {
  let map = new Map<string, number>();

  const dp = (indexMul: number, indexNums: number): number => {
    if (indexMul === multipliers.length) return 0;

    const key = indexMul + "---" + indexNums;

    if (!map.has(key)) {
      map.set(
        key,
        Math.max(
          multipliers[indexMul] * nums[indexNums] +
            dp(indexMul + 1, indexNums + 1),
          multipliers[indexMul] *
            nums[nums.length - 1 - (indexMul - indexNums)] +
            dp(indexMul + 1, indexNums),
        ),
      );
    }

    return map.get(key) || 0;
  };
  return dp(0, 0);
}
