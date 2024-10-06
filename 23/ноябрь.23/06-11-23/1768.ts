function mergeAlternately(word1: string, word2: string): string {
  let first = 0;
  let second = 0;
  let result = "";
  while (first < word1.length || second < word2.length) {
    result += word1[first];
    result += word2[second];
    first++;
    second++;
  }

  while (first < word1.length) {
    result += word1[first];
    first++;
  }
  while (second < word2.length) {
    result += word2[second];
    second++;
  }
  return result;
}
