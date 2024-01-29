function longestCommonPrefix(strs: string[]): string {
  let ans = "";
  let buffer = "";
  for (let i = 0; i < strs[0].length; i++) {
    buffer = strs[0][i];
    for (const str of strs) {
      if (str[i] !== buffer) {
        return ans;
      }
    }
    ans += buffer;
  }
  return ans;
}
