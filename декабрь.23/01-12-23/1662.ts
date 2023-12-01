function arrayStringsAreEqual(word1: string[], word2: string[]): boolean {
  let a1 = "";
  for (let el of word1) {
    a1 += el;
  }
  let a2 = "";
  for (let el of word2) {
    a2 += el;
  }
  return a2 === a1;
}
