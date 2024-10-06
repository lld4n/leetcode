function finalValueAfterOperations(operations: string[]): number {
  let x = 0;
  for (const o of operations) {
    if (o.includes("-")) {
      x--;
    } else {
      x++;
    }
  }
  return x;
}
