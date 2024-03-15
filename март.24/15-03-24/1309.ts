function freqAlphabets(s: string): string {
  const alp: string[] = [
    "",
    "a",
    "b",
    "c",
    "d",
    "e",
    "f",
    "g",
    "h",
    "i",
    "j",
    "k",
    "l",
    "m",
    "n",
    "o",
    "p",
    "q",
    "r",
    "s",
    "t",
    "u",
    "v",
    "w",
    "x",
    "y",
    "z",
  ];
  let ans = "";
  let i = s.length - 1;
  while (i >= 0) {
    if (s[i] === "#") {
      const value = alp[Number(s[i - 2] + s[i - 1])];
      ans = value + ans;
      i -= 3;
    } else {
      ans = alp[Number(s[i])] + ans;
      i--;
    }
  }
  return ans;
}
