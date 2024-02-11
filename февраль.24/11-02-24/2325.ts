function decodeMessage(key: string, message: string): string {
  const alp: string[] = [
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
  const table: string[] = Array.from(new Set(key.split("").filter((e) => e !== " ")));

  let ans = "";
  for (const letter of message) {
    if (letter === " ") {
      ans += " ";
    } else {
      const index = table.indexOf(letter);
      ans += alp[index];
    }
  }
  return ans;
}
