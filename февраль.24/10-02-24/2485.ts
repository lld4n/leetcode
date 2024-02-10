function pivotInteger(n: number): number {
  for (let x = 1; x <= n; x++) {
    let left = 0;
    let right = 0;
    for (let i = 1; i <= n; i++) {
      if (i < x) left += i;
      if (i > x) right += i;
      if (i === x) {
        left += i;
        right += i;
      }
    }
    if (left === right) return x;
  }
  return -1;
}
