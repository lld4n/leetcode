function findMiddleIndex(nums: number[]): number {
  for (let i = 0; i < nums.length; i++) {
    if (_.sum(nums.slice(0, i)) === _.sum(nums.slice(i + 1))) return i;
  }
  return -1;
}
