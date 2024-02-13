function mostWordsFound(sentences: string[]): number {
  return Math.max(...sentences.map((e) => e.split(" ").length));
}
