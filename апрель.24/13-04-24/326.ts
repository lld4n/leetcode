function isPowerOfThree(n: number): boolean {
  if (n < 1) return false;
  const c = Math.log(n) / Math.log(3);
  return 3 ** Math.floor(c) === n;
}
