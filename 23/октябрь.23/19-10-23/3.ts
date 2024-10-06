function lengthOfLongestSubstring(s: string): number {
  let result = 0;
  for (let i = 0; i < s.length; i++) {
    let buffer = s[i];
    for (let j = i + 1; j < s.length; j++) {
      if (buffer.includes(s[j])) {
        break;
      } else {
        buffer += s[j];
      }
    }
    result = Math.max(result, buffer.length);
  }
  return result;
}
