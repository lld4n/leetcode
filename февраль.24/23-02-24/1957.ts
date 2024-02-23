function makeFancyString(s: string): string {
  const ans: string[] = [s[0], s[1]];
  for (let i = 2; i < s.length; i++) {
    if (
      s[i] === ans[ans.length - 1] &&
      ans[ans.length - 1] === ans[ans.length - 2]
    ) {
      continue;
    } else {
      ans.push(s[i]);
    }
  }

  return ans.join("");
}
