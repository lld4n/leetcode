function countPalindromicSubsequence(s: string): number {
  let set = new Set<string>();
  let answer = 0;
  for (let i = 0; i < s.length; i++) {
    if (!set.has(s[i])) {
      for (let j = s.length - 1; j > i; j--) {
        if (s[j] === s[i]) {
          set.add(s[i]);
          answer += new Set(s.substring(i + 1, j).split("")).size;
          break;
        }
      }
    }
  }
  return answer;
}
