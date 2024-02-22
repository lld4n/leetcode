function countVowelSubstrings(word: string): number {
  // 'a', 'e', 'i', 'o', and 'u'
  const list: number[][] = [[0, 0, 0, 0, 0, 0]];
  for (const l of word) {
    let f = list.pop()!;
    list.push([...f]);
    if (l === "a") f[0]++;
    else if (l === "e") f[1]++;
    else if (l === "i") f[2]++;
    else if (l === "o") f[3]++;
    else if (l === "u") f[4]++;
    else f[5]++;
    list.push([...f]);
  }
  let ans = 0;
  for (let i = 0; i < list.length; i++) {
    for (let j = i; j < list.length; j++) {
      const fs = list[i];
      const fe = list[j];
      const real: number[] = [];
      for (let k = 0; k < fs.length; k++) {
        real.push(fe[k] - fs[k]);
      }
      if (
        real[0] > 0 &&
        real[1] > 0 &&
        real[2] > 0 &&
        real[3] > 0 &&
        real[4] > 0 &&
        real[5] === 0
      ) {
        ans++;
      }
    }
  }
  return ans;
}
