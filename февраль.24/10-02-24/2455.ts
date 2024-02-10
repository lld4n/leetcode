function averageValue(nums: number[]): number {
  const ans: number[] = nums.filter((e) => e % 6 === 0);
  return ans.length > 0 ? Math.floor(_.sum(ans) / ans.length) : 0;
}
