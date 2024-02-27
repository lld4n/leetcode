function countConsistentStrings(
  allowed: string,
  words: string[],
): number {
  const check: boolean[] = new Array(123).fill(false);
  for (const l of allowed) check[l.charCodeAt(0)] = true;

  const c = (s: string): boolean => {
    const b: boolean[] = new Array(123).fill(false);
    for (const l of s) {
      b[l.charCodeAt(0)] = true;
      if (!check[l.charCodeAt(0)]) return false;
    }
    return true;
  };

  return words.filter((e) => c(e)).length;
}
