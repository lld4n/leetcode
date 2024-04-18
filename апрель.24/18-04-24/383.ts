function canConstruct(ransomNote: string, magazine: string): boolean {
  const map: { [k: string]: number } = {};
  for (const l of magazine) map[l] = map[l] ? map[l] + 1 : 1;

  for (const l of ransomNote) {
    if (map[l] > 0) {
      map[l]--;
    } else {
      return false;
    }
  }
  return true;
}
