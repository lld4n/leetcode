function percentageLetter(s: string, letter: string): number {
  const count = s.split("").filter((e) => e === letter).length;
  return Math.floor((count / s.length) * 100);
}
