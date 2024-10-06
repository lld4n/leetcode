function mySqrt(x: number): number {
  if (x === 1) return 1;
  let l = 0;
  let r = x;
  while (l + 1 < x) {
    const m = Math.floor((l + r) / 2);
    console.log(l, r, m);
    if (m ** 2 === x) {
      return m;
    }

    if (l === m || r === m) break;

    if (m ** 2 < x) {
      l = m;
    } else {
      r = m;
    }
  }
  return l;
}
