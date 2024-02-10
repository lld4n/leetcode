function similarPairs(words: string[]): number {
  const list: string[] = [];
  for (const item of words) {
    const buffer: boolean[] = new Array(123).fill(false);
    for (const letter of item) {
      buffer[letter.charCodeAt(0)] = true;
    }
    list.push(buffer.join(""));
  }
  let ans = 0;
  for (let i = 0; i < list.length; i++) {
    for (let j = i + 1; j < list.length; j++) {
      if (list[i] === list[j]) ans++;
    }
  }
  return ans;
}
