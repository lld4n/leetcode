function waysToBuyPensPencils(total: number, cost1: number, cost2: number): number {
  if (cost2 > cost1) {
    [cost1, cost2] = [cost2, cost1];
  }
  const len1 = Math.floor(total / cost1);
  let result = 0;
  for (let i = 0; i <= len1; i++) {
    result += Math.floor((total - cost1 * i) / cost2) + 1;
  }
  return result;
}
