function maximumWealth(accounts: number[][]): number {
  return Math.max(
    ...accounts.map((el) => {
      return el.reduce((acc, e) => acc + e, 0);
    }),
  );
}
