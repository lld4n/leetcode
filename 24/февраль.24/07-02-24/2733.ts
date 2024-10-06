function findNonMinOrMax(nums: number[]): number {
  return nums.length > 2 ? nums.sort((a, b) => a - b)[1] : -1;
}
