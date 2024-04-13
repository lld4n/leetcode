function isPowerOfFour(n: number): boolean {
  if (n < 1) return false;
  const c = Math.log(n) / Math.log(4);
  return 4 ** Math.floor(c) === n;
}
