function findGCD(nums: number[]): number {
  const gcd = (a: number, b: number) => {
    if (b === 0) {
      return a;
    } else {
      return gcd(b, a % b);
    }
  };
  return gcd(Math.max(...nums), Math.min(...nums));
}
