function maxVowels(s: string, k: number): number {
  const vowels = ["a", "e", "i", "o", "u"];
  let ans = 0;
  let count = 0;
  for (let i = 0; i < k; i++) {
    if (vowels.includes(s[i])) {
      count++;
    }
  }
  ans = Math.max(ans, count);
  for (let i = k; i < s.length; i++) {
    if (vowels.includes(s[i - k])) {
      count--;
    }
    if (vowels.includes(s[i])) {
      count++;
    }
    ans = Math.max(ans, count);
  }
  return ans;
}
