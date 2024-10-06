function countAsterisks(s: string): number {
  let pair = false;
  let ans = 0;
  for (const letter of s) {
    if (letter === "*") {
      if (!pair) ans++;
    }
    if (letter === "|") {
      pair = !pair;
    }
  }
  return ans;
}
