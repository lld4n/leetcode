function compressedString(word: string): string {
  let comp: [number, string][] = [];

  let count = 1;
  let char = word[0];

  for (let i = 1; i < word.length; i++) {
    const letter = word[i];

    if (letter === char) {
      count++;
    } else {
      comp.push([count, char]);
      count = 1;
      char = letter;
    }
  }

  if (count > 0 && char.length > 0) {
    comp.push([count, char]);
  }

  let res = "";

  for (const [c, letter] of comp) {
    let count = c;

    while (count > 9) {
      res += "9" + letter;
      count -= 9;
    }

    if (count > 0) {
      res += count.toString() + letter;
    }
  }

  return res;
}
