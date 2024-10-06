function largestOddNumber(num: string): string {
  let answer = "";
  for (let i = 0; i < num.length; i++) {
    if (Number(num[i]) % 2 === 1) {
      answer = num.slice(0, i + 1);
    }
  }
  return answer;
}
