function areOccurrencesEqual(s: string): boolean {
  const map: { [key: string]: number } = {};
  for (const w of s) map[w] = map[w] ? map[w] + 1 : 1;
  return Object.values(map).every((e) => e === Object.values(map)[0]);
}
