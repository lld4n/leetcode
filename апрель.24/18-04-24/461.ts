function hammingDistance(x: number, y: number): number {
  let xx = x.toString(2);
  let yy = y.toString(2);
  while (xx.length !== yy.length) {
    if (xx.length < yy.length) xx = "0" + xx;
    else yy = "0" + yy;
  }
  let ans = 0;
  for (let i = 0; i < xx.length; i++) {
    if (xx[i] !== yy[i]) ans++;
  }
  return ans;
}
