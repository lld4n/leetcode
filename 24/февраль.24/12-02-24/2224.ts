function convertTime(current: string, correct: string): number {
  const cur = current.split(":").map(Number);
  const cor = correct.split(":").map(Number);
  let curMin = cur[0] * 60 + cur[1];
  let corMin = cor[0] * 60 + cor[1];
  let ans = 0;

  while (curMin !== corMin) {
    if (corMin - curMin >= 60) {
      curMin += 60;
    } else if (corMin - curMin >= 15) {
      curMin += 15;
    } else if (corMin - curMin >= 5) {
      curMin += 5;
    } else {
      curMin++;
    }
    ans++;
  }
  return ans;
}
