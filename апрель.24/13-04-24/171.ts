function titleToNumber(columnTitle: string): number {
  let ans = 0;
  for (let i = 0; i < columnTitle.length; i++) {
    ans +=
      (columnTitle[i].charCodeAt(0) - 64) *
      26 ** (columnTitle.length - i - 1);
  }
  return ans;
}
