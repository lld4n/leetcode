function isSubstringPresent(s: string): boolean {
  const r = s.split("").reverse().join("");
  for (let i = 0; i < s.length - 1; i++) {
    const b = s.slice(i, i + 2);
    if (r.includes(b)) return true;
  }
  return false;
}
