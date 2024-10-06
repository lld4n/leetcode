function isAcronym(words: string[], s: string): boolean {
  return words.map((e) => e[0]).join("") === s;
}
