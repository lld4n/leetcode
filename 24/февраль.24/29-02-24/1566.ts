function containsPattern(
  arr: number[],
  m: number,
  k: number,
): boolean {
  const str = arr.join("_");
  for (let i = 0; i < arr.length - m; i++) {
    const b = arr.slice(i, i + m).join("_");
    let c = b;
    let j = 1;
    while (j !== k) {
      c += b;
      j++;
    }
    if (str.includes(c)) return true;
  }
  return false;
}
