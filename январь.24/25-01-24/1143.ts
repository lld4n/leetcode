function longestCommonSubsequence(text1: string, text2: string): number {
  const list: number[][] = [];
  for (let i = 0; i < text1.length + 1; i++) {
    list.push(new Array(text2.length + 1).fill(0));
  }
  for (let i = 1; i < list.length; i++) {
    for (let j = 1; j < list[i].length; j++) {
      if (text1[i - 1] === text2[j - 1]) {
        list[i][j] = 1 + list[i - 1][j - 1];
      } else {
        list[i][j] = Math.max(list[i - 1][j], list[i][j - 1]);
      }
    }
  }
  return Math.max(...list.map((e) => Math.max(...e)));
}
