function findPoisonedDuration(
  timeSeries: number[],
  duration: number,
): number {
  let start = 0;
  let end = -1;
  let ans = 0;
  for (const t of timeSeries) {
    if (t <= end) {
      ans += t - start;
    } else if (end !== -1) {
      ans += end - start + 1;
    }
    end = t + duration - 1;
    start = t;
  }
  ans += end - start + 1;
  return ans;
}
