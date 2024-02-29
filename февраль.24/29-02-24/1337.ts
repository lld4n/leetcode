function kWeakestRows(mat: number[][], k: number): number[] {
  return mat
    .map((e) => e.reduce((p, c) => p + c, 0))
    .map((e, i) => [e, i])
    .sort((a, b) => {
      if (a[0] < b[0]) {
        return -1;
      }
      if (a[0] > b[0]) {
        return 1;
      }
      if (a[1] < b[1]) {
        return -1;
      }
      if (a[1] > b[1]) {
        return 1;
      }
      return 0;
    })
    .slice(0, k)
    .map((e) => e[1]);
}
