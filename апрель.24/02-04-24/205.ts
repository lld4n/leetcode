function isIsomorphic(s: string, t: string): boolean {
  const map: { [key: string]: string } = {};
  const set: Set<string> = new Set();
  for (let i = 0; i < s.length; i++) {
    if (map[s[i]]) {
      if (map[s[i]] !== t[i]) {
        return false;
      }
    } else {
      if (set.has(t[i])) {
        return false;
      }
      set.add(t[i]);
      map[s[i]] = t[i];
    }
  }
  return true;
}
