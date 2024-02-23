function isPrefixString(s: string, words: string[]): boolean {
  let l = 0;
  let flag = false;
  for (const w of words) {
    l += w.length;
    if (l === s.length) {
      flag = true;
      break;
    }
  }
  if (!flag) return false;
  const word = words.join("");
  return word.indexOf(s) === 0;
}
