function buildArray(target: number[], n: number): string[] {
  let answer: string[] = [];
  let index = 0;
  for (let i = 1; i < n; i++) {
    if (index === target.length - 1) {
      break;
    }

    if (i === target[index]) {
      answer.push("Push");
      index++;
    } else {
      answer.push("Push");
      answer.push("Pop");
    }
  }
  return answer;
}
