function secondHighest(s: string): number {
  const set: Set<number> = new Set();
  for (const l of s) {
    if (/\d/g.test(l)) set.add(Number(l));
  }
  const list = Array.from(set).sort((a, b) => b - a);
  return list.length >= 2 ? list[1] : -1;
}
