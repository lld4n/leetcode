function subtractProductAndSum(n: number): number {
  const list: number[] = String(n).split("").map(Number);
  let sm = 0;
  let pm = 1;
  for (const item of list) {
    sm += item;
    pm *= item;
  }
  return pm - sm;
}
