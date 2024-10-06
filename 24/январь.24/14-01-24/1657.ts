function closeStrings(word1: string, word2: string): boolean {
  let l1 = new Array(123).fill(0);
  let l2 = new Array(123).fill(0);
  word1.split("").forEach((el) => l1[el.charCodeAt(0)]++);
  word2.split("").forEach((el) => l2[el.charCodeAt(0)]++);
  for (let i = 0; i < l1.length; i++) {
    if (l1[i] !== 0 && l2[i] === 0) {
      return false;
    }
  }
  l1 = l1.filter((el) => el !== 0).sort((a, b) => a - b);
  l2 = l2.filter((el) => el !== 0).sort((a, b) => a - b);
  for (let i = 0; i < l1.length; i++) {
    if (l1[i] !== l2[i]) {
      return false;
    }
  }
  return true;
}
