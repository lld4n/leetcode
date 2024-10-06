function divideString(s: string, k: number, fill: string): string[] {
  const ans: string[] = [];
  let buffer = "";
  for (let i = 0; i < s.length; i++) {
    if (i % k === 0 && buffer.length > 0) {
      ans.push(buffer);
      buffer = "";
    } else {
      buffer += s[i];
    }
  }

  if (buffer.length > 0) {
    while (buffer.length !== k) {
      buffer += fill;
    }
    ans.push(buffer);
  }
  return ans;
}
