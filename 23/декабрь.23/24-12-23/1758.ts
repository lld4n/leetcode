function minOperations(s: string): number {
  let answer1 = 0;
  for (let i = 0; i < s.length; i++) {
    if (i % 2 === 0) {
      if (s[i] === "1") {
        answer1++;
      }
    } else {
      if (s[i] === "0") {
        answer1++;
      }
    }
  }
  let answer2 = 0;
  for (let i = 0; i < s.length; i++) {
    if (i % 2 === 0) {
      if (s[i] === "0") {
        answer2++;
      }
    } else {
      if (s[i] === "1") {
        answer2++;
      }
    }
  }
  return Math.min(answer1, answer2);
}
