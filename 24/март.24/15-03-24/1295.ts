function findNumbers(nums: number[]): number {
  return nums.map(String).filter((e) => e.length % 2 === 0).length;
}
