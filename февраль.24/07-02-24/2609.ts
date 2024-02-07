function findTheLongestBalancedSubstring(s: string): number {
  const check = (str: string) => {
    if (str[0] !== "0") return false;
    if (str.length % 2 !== 0) return false;
    const left = str.split("").slice(0, str.length / 2);
    const right = str.split("").slice(str.length / 2);
    if (left.includes("1")) return false;
    if (right.includes("0")) return false;
    return true;
  };
  let ans = 0;
  for (let i = 0; i < s.length; i++) {
    for (let j = i + 1; j < s.length; j++) {
      if (check(s.slice(i, j + 1))) {
        ans = Math.max(ans, j - i + 1);
      }
    }
  }
  return ans;
}
