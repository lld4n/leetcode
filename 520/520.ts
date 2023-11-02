function detectCapitalUse(word: string): boolean {
  const alhabet = [
    "A",
    "B",
    "C",
    "D",
    "E",
    "F",
    "G",
    "H",
    "I",
    "J",
    "K",
    "L",
    "M",
    "N",
    "O",
    "P",
    "Q",
    "R",
    "S",
    "T",
    "U",
    "V",
    "W",
    "X",
    "Y",
    "Z",
  ];
  let countCapital = 0;
  for (let i = 0; i < word.length; i++) {
    if (alhabet.includes(word[i])) {
      countCapital++;
    }
  }
  if (alhabet.includes(word[0])) {
    if (countCapital === 1) {
      return true;
    } else return countCapital === word.length;
  } else {
    return countCapital === 0;
  }
}
