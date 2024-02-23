function reversePrefix(word: string, ch: string): string {
  const list = word.split("");
  const index = list.indexOf(ch);
  if (index === -1) return word;
  return [...list.slice(0, index + 1).reverse(), ...list.slice(index + 1)].join(
    "",
  );
}
