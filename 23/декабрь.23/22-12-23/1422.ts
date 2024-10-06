function maxScore(s: string): number {
  let zeros: number[] = [];
  let ones: number[] = [];
  let z: number = 0;
  for (let i = 0; i < s.length - 1; i++) {
    if (s[i] === "0") {
      z++;
    }
    zeros.push(z);
  }
  let o = 0;
  for (let i = s.length - 1; i >= 1; i--) {
    if (s[i] === "1") {
      o++;
    }
    ones.unshift(o);
  }
  console.log(zeros, ones);
  let answer = -Infinity;
  for (let i = 0; i < zeros.length; i++) {
    answer = Math.max(answer, zeros[i] + ones[i]);
  }
  return answer;
}
