function digitCount(num: string): boolean {
  const map = new Array(11).fill(0);
  for (const l of num) map[Number(l)]++;
  for (let i = 0; i < num.length; i++) {
    if (map[i] !== Number(num[i])) {
      return false;
    }
  }
  return true;
}
