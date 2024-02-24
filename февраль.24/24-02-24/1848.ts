function getMinDistance(
  nums: number[],
  target: number,
  start: number,
): number {
  let right = start;
  let left = start;
  while (true) {
    if (nums[right] === target) {
      return Math.abs(right - start);
    }
    if (nums[left] === target) {
      return Math.abs(left - start);
    }
    right++;
    left--;
  }
}
