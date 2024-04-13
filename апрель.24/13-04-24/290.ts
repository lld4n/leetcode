function wordPattern(pattern: string, s: string): boolean {
  const map: { [k: string]: string } = {};
  const set: Set<string> = new Set();
  const list = s.split(" ");
  if (list.length !== pattern.length) return false;
  for (let i = 0; i < pattern.length; i++) {
    if (map[pattern[i]]) {
      if (map[pattern[i]] !== list[i]) return false;
    } else {
      if (set.has(list[i])) return false;
      set.add(list[i]);
      map[pattern[i]] = list[i];
    }
  }
  return true;
}
