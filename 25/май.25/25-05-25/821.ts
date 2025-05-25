function shortestToChar(s: string, c: string): number[] {
  const answer: number[] = [];

  const pos: number[] = [];

  for (let i = 0; i < s.length; i++) {
    if (s[i] === c) pos.push(i);
  }

  for (let i = 0; i < s.length; i++) {
    let res = Math.abs(pos[0] - i);
    for (const p of pos) {
      res = Math.min(res, Math.abs(p - i));
    }
    answer.push(res);
  }
  return answer;
}
