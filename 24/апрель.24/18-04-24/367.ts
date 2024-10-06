function isPerfectSquare(num: number): boolean {
  let l = 1;
  let r = 46341;
  while (l < r) {
    let m = Math.floor((r + l) / 2);
    // console.log(l, r, m)
    if (m * m === num) return true;
    if (m * m < num) {
      l = m + 1;
    } else {
      r = m;
    }
  }
  return false;
}
