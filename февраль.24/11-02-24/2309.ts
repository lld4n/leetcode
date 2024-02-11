function greatestLetter(s: string): string {
  const alp = [
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
  const map: { [key: string]: number } = {};
  for (const letter of s) {
    map[letter] = map[letter] ? map[letter] + 1 : 1;
  }
  let ans: string[] = [""];
  for (const le of alp) {
    if (map[le] && map[le.toLowerCase()]) {
      ans.push(le);
    }
  }
  ans = ans.sort();
  return ans.pop()!;
}
