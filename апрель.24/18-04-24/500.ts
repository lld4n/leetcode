function findWords(words: string[]): string[] {
  const frow = "qwertyuiop";
  const srow = "asdfghjkl";
  const trow = "zxcvbnm";
  const l = (s: string) => s.toLowerCase();
  const ans: string[] = [];
  for (const w of words) {
    let row = 0;
    let flag = true;
    if (frow.includes(l(w[0]))) row = 1;
    if (srow.includes(l(w[0]))) row = 2;
    if (trow.includes(l(w[0]))) row = 3;
    for (let i = 1; i < w.length; i++) {
      if (row === 1 && !frow.includes(l(w[i]))) flag = false;
      if (row === 2 && !srow.includes(l(w[i]))) flag = false;
      if (row === 3 && !trow.includes(l(w[i]))) flag = false;
    }
    if (flag) ans.push(w);
  }
  return ans;
}
