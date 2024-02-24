function sortSentence(s: string): string {
  const list: string[] = s.split(" ");
  const ans: string[] = new Array(list.length).fill("");
  for (const w of list) {
    const n = Number(w.match(/\d+/g));
    ans[n - 1] = w.match(/[a-zA-Z]+/g)![0];
  }
  return ans.join(" ");
}
