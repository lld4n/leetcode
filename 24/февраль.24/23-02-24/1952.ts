function isThree(n: number): boolean {
  if (n === 1 || n === 2) return false;
  const set = new Set([1, n]);
  for (let i = 2; i < Math.floor(Math.sqrt(n)) + 1; i++) {
    if (n % i === 0) {
      set.add(i);
      set.add(Math.floor(n / i));
    }
  }
  return set.size === 3;
}
