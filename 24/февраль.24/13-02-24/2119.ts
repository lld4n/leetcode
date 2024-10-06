function isSameAfterReversals(num: number): boolean {
  const reversed1 = Number(String(num).split("").reverse().join(""));
  const reversed2 = Number(String(reversed1).split("").reverse().join(""));
  return num === reversed2;
}
