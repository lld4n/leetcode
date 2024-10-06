function distinctIntegers(n: number): number {
  const seen: Set<number> = new Set();
  const stack: number[] = [n];
  while (stack.length !== 0) {
    const x = stack.pop();
    for (let i = 1; i <= n; i++) {
      if (x % i === 1) {
        stack.push(i);
      }
    }
    seen.add(x);
  }
  return seen.size;
}
