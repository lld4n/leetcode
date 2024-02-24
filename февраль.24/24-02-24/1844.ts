function replaceDigits(s: string): string {
  const shift = (q: string, n: number) => {
    return String.fromCharCode(q.charCodeAt(0) + n);
  };
  const list: string[] = s.split("");
  for (let i = 1; i < s.length; i += 2) {
    list[i] = shift(s[i - 1], Number(s[i]));
  }
  return list.join("");
}
