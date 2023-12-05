function numberOfMatches(n: number): number {
  return recursive(n);
}

function recursive(n: number) {
  if (n === 1) return 0;
  if (n % 2 === 0) {
    return n / 2 + recursive(n / 2);
  }
  if (n % 2 !== 0) {
    return (n - 1) / 2 + recursive((n - 1) / 2 + 1);
  }
}
