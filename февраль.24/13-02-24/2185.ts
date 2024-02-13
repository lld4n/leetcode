function prefixCount(words: string[], pref: string): number {
  return words.filter((e) => e.slice(0, pref.length) === pref).length;
}
