function halvesAreAlike(s: string): boolean {
  const list = ["a", "e", "i", "o", "u", "A", "E", "I", "O", "U"];
  let l1 = 0;
  let l2 = 0;
  for (let i = 0; i < s.length / 2; i++) {
    if (list.includes(s[i])) {
      l1++;
    }
  }
  for (let i = s.length / 2; i < s.length; i++) {
    if (list.includes(s[i])) {
      l2++;
    }
  }

  return l1 === l2;
}
