function splitWordsBySeparator(words: string[], separator: string): string[] {
  return words
    .map((el) => el.split(separator))
    .flat()
    .filter((e) => e !== "");
}
