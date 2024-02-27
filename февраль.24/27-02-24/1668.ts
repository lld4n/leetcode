function maxRepeating(sequence: string, word: string): number {
  const r = new RegExp(word, "g");
  const c = (s: string): boolean => {
    if (s.length % word.length !== 0) return false;
    const l = s.replace(r, "_").split("");
    return l.every((e) => e === "_");
  };
  let ans = 0;
  for (let i = 0; i < sequence.length; i++) {
    for (let j = i; j < sequence.length; j++) {
      const slic = sequence.slice(i, j + 1);
      if (c(slic)) {
        ans = Math.max(ans, Math.floor(slic.length / word.length));
      }
    }
  }
  return ans;
}
