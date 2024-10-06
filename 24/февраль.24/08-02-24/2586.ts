function vowelStrings(words: string[], left: number, right: number): number {
  words = words.slice(left, right + 1);
  const vowels = ["a", "e", "i", "o", "u"];
  return words.filter((e) => {
    if (vowels.includes(e[0]) && vowels.includes(e[e.length - 1])) return true;
  }).length;
}
