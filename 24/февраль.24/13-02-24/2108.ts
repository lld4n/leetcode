function firstPalindrome(words: string[]): string {
  for (const word of words) {
    if (word === word.split("").reverse().join("")) return word;
  }
  return "";
}
