function areAlmostEqual(s1: string, s2: string): boolean {
  const ans: number[] = [];
  for (let i = 0; i < s1.length; i++) {
    if (s1[i] !== s2[i]) {
      ans.push(i);
    }
  }
  if (ans.length > 2) return false;
  if (ans.length === 0) return true;
  if (ans.length === 1) return false;
  if (ans.length === 2) {
    const b = s1.split("");
    [b[ans[0]], b[ans[1]]] = [b[ans[1]], b[ans[0]]];
    return b.join("") === s2;
  }
  return true;
}
