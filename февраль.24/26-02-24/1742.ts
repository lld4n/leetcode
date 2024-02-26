function countBalls(lowLimit: number, highLimit: number): number {
  const s = (n: number): number => {
    return String(n)
      .split("")
      .map(Number)
      .reduce((p, c) => p + c, 0);
  };
  const map: { [m: number]: number } = {};
  for (let i = lowLimit; i <= highLimit; i++) {
    const b = s(i);
    map[b] = map[b] ? map[b] + 1 : 1;
  }
  return Math.max(...Object.values(map));
}
