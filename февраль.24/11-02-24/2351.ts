function repeatedCharacter(s: string): string {
  const map: { [key: string]: number } = {};
  for (let i = 0; i < s.length; i++) {
    if (map[s[i]] === -1) {
      map[s[i]] = i;
    } else if (!map[s[i]]) {
      map[s[i]] = -1;
    }
  }
  return Object.entries(map)
    .filter((e) => e[1] !== -1)
    .sort((a, b) => a[1] - b[1])
    .shift()![0];
}
