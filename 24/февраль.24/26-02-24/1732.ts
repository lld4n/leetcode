function largestAltitude(gain: number[]): number {
  let ans = 0;
  let cur = 0;
  while (gain.length !== 0) {
    cur += gain.shift()!;
    if (ans < cur) ans = cur;
  }
  return ans;
}
