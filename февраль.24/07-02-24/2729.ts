function isFascinating(n: number): boolean {
  const c = (String(n) + String(n * 2) + String(n * 3)).split("");
  if (c.includes("0")) return false;
  return new Set(c).size === 9 && new Set(c).size === c.length;
}
