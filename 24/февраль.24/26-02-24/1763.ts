function longestNiceSubstring(s: string): string {
  const c = (str: string) => {
    const lst = new Array(123).fill(0);
    for (const l of str) lst[l.charCodeAt(0)]++;
    for (let i = 65; i <= 90; i++) {
      if (
        (lst[i] !== 0 || lst[i + 32] !== 0) &&
        !(lst[i] > 0 && lst[i + 32] > 0)
      ) {
        return false;
      }
    }
    return true;
  };
  let ans = "";
  for (let i = 0; i < s.length; i++) {
    for (let j = i; j < s.length; j++) {
      const b = s.slice(i, j + 1);

      if (c(b) && b.length > ans.length) ans = b;
    }
  }
  return ans;
}
