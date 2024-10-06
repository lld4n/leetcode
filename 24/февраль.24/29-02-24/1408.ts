function stringMatching(words: string[]): string[] {
  const ans: string[] = [];
  for (const item of words) {
    for (const q of words) {
      if (q !== item && q.includes(item)) {
        ans.push(item);
        break;
      }
    }
  }
  return ans;
}
