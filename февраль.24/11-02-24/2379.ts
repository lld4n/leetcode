function minimumRecolors(blocks: string, k: number): number {
  const list = blocks.split('').map((e) => (e === 'B' ? true : false));
  let ans = Infinity;

  for (let i = 0; i < list.length - k + 1; i++) {
    let countW = 0;
    for (let j = i; j < i + k; j++) {
      if (!list[j]) countW++;
    }
    ans = Math.min(ans, countW);
  }
  return ans;
}
