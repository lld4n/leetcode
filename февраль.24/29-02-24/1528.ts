function restoreString(s: string, indices: number[]): string {
  const ans: string[] = new Array(s.length).fill("");
  for (let i = 0; i < indices.length; i++) {
    ans[indices[i]] = s[i];
  }
  return ans.join("");
}
