function getLongestSubsequence(words: string[], groups: number[]): string[] {
  const ans: [string, number][] = [[words[0], groups[0]]];
  for (let i = 1; i < words.length; i++) {
    if (ans[ans.length - 1][1] !== groups[i]) {
      ans.push([words[i], groups[i]]);
    }
  }
  return ans.map((e) => e[0]);
}
