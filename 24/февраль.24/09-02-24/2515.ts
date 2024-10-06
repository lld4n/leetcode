function closetTarget(
  words: string[],
  target: string,
  startIndex: number,
): number {
  if (!words.includes(target)) return -1;
  startIndex += words.length;
  words = [...words, ...words, ...words];
  let ans = Infinity;
  for (let i = 0; i < words.length; i++) {
    if (words[i] === target) ans = Math.min(ans, Math.abs(i - startIndex));
  }
  return ans;
}
