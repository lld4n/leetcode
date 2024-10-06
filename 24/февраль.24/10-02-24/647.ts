function countSubstrings(s: string): number {
  const isPal = (str: string) => {
    let s = 0;
    let e = str.length - 1;
    while (s !== Math.floor(str.length / 2)) {
      if (str[s] !== str[e]) return false;
      s++;
      e--;
    }
    return true;
  };
  let ans = 0;
  for (let i = 0; i < s.length; i++) {
    for (let j = i; j < s.length; j++) {
      ans += isPal(s.slice(i, j + 1)) ? 1 : 0;
    }
  }
  return ans;
}
