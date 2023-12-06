function totalMoney(n: number): number {
  let pn = 0;
  let other = 1;
  let answer = 0;
  for (let i = 0; i < n; i++) {
    if (i % 7 === 0) {
      pn++;
      other = pn;
      answer += pn;
    } else {
      other++;
      answer += other;
    }
  }
  return answer;
}
