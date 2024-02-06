function lastVisitedIntegers(words: string[]): number[] {
  const list: number[] = [];
  const ans: number[] = [];
  let i = 0;
  for (const item of words) {
    if (item === "prev") {
      if (list[i] !== undefined) {
        ans.push(list[i]);
      } else {
        ans.push(-1);
      }
      i++;
    } else {
      i = 0;
      list.unshift(Number(item));
    }
  }
  return ans;
}
