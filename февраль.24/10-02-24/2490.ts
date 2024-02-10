function isCircularSentence(sentence: string): boolean {
  const list = sentence
    .split(" ")
    .map((e) => [e[0], e[e.length - 1]])
    .flat();
  list.push(list.shift());
  for (let i = 0; i < list.length - 1; i += 2) {
    if (list[i] !== list[i + 1]) return false;
  }
  return true;
}
