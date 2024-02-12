function removeAnagrams(words: string[]): string[] {
  const map: number[][] = [];

  for (const word of words) {
    const buffer = new Array(123).fill(0);
    for (const l of word) buffer[l.charCodeAt(0)]++;
    map.push(buffer);
  }
  let i = 1;
  while (i !== words.length - 1) {
    if (_.isEqual(map[i - 1], map[i])) {
      map.splice(i, 1);
      words.splice(i, 1);
      i = 1;
    } else {
      i++;
    }
  }
  return words;
}
