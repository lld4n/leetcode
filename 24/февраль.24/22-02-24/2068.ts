function checkAlmostEquivalent(word1: string, word2: string): boolean {
  const g = (w: string) => {
    const map: { [key: string]: number } = {};
    for (const key of w) map[key] = map[key] ? map[key] + 1 : 1;
    return map;
  };

  const m1 = g(word1);
  const m2 = g(word2);
  for (const key in m1) {
    if (Math.abs((m2[key] || 0) - m1[key]) > 3) return false;
  }
  for (const key in m2) {
    if (Math.abs((m1[key] || 0) - m2[key]) > 3) return false;
  }
  return true;
}
