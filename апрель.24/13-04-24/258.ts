function addDigits(num: number): number {
  let s = String(num);

  while (s.length !== 1) {
    s = String(
      s
        .split("")
        .map(Number)
        .reduce(
          (previousValue, currentValue) =>
            previousValue + currentValue,
          0,
        ),
    );
  }
  return Number(s);
}
