function canBeTypedWords(text: string, brokenLetters: string): number {
  const list: string[] = text.split(" ");
  let ans = 0;
  for (const item of list) {
    let flag = true;
    for (const w of item) {
      if (brokenLetters.includes(w)) flag = false;
    }
    if (flag) ans++;
  }
  return ans;
}
