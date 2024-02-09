function captureForts(forts: number[]): number {
  const str = forts
    .map((e) => {
      if (e === -1) {
        return 2;
      }
      return e;
    })
    .join("");

  const f = str.match(/10+2/g);
  const s = str.match(/20+1/g);
  let ans = 0;
  if (f) {
    ans = Math.max(ans, ...f.map((e) => e.length - 2));
  }
  if (s) {
    ans = Math.max(ans, ...s.map((e) => e.length - 2));
  }

  return ans;
}
