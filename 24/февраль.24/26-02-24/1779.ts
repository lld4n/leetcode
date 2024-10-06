function nearestValidPoint(
  x: number,
  y: number,
  points: number[][],
): number {
  let ans = -1;
  let path = Infinity;
  for (let i = 0; i < points.length; i++) {
    const [a, b] = points[i];
    if (x === a || y === b) {
      const v = Math.abs(x - a) + Math.abs(y - b);
      if (v < path) {
        path = v;
        ans = i;
      }
    }
  }
  return ans;
}
