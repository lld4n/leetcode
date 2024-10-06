function differenceOfSum(nums: number[]): number {
  return Math.abs(_.sum(nums) - _.sum(nums.join("").split("").map(Number)));
}
