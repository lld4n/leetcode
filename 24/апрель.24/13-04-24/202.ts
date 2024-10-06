function isHappy(n: number): boolean {
  const seen = new Set();
  while (n != 1 && !seen.has(n)) {
    seen.add(n);
    n = n
      .toString()
      .split("")
      .reduce((prev, acc) => prev + Number(acc) ** 2, 0);
  }
  return n === 1;
}
