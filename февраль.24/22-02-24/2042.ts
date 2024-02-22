function areNumbersAscending(s: string): boolean {
  let last = -Infinity;
  const list = s.split(" ").filter((e) => /^\d+$/g.test(e));
  for (const w of list) {
    const n = Number(w);
    if (n <= last) return false;
    last = n;
  }
  return true;
}
