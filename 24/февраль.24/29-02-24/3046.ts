function isPossibleToSplit(nums: number[]): boolean {
  const list: number[] = new Array(101).fill(0);
  for (const n of nums) list[n]++;

  for (const item of list) {
    if (item > 2) return false;
  }
  return true;
}
