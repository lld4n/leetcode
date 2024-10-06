function furthestDistanceFromOrigin(moves: string): number {
  let count = 0;
  let cur = 0;
  for (const item of moves) {
    if (item === "_") count++;
    if (item === "R") cur++;
    if (item === "L") cur--;
  }
  if (cur > 0) {
    return cur + count;
  } else {
    return Math.abs(cur - count);
  }
}
