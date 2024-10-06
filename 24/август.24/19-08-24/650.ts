function minSteps(n: number): number {
  const ans: number[] = [];
  if (n === 1) return 0;
  let i = 2;
  while (n !== 1) {
    if (n % i === 0) {
      n = n / i;
      ans.push(i);
    } else {
      i++;
    }
  }
  return _.sum(ans);
}
