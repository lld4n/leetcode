function fib(n: number): number {
  const f: number[] = [0, 1];
  for (let i = 2; i <= n; i++) {
    f.push(f[i - 1] + f[i - 2]);
  }
  return f[n];
}
