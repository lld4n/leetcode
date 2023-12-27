function minCost(colors: string, neededTime: number[]): number {
  let last: number = 0;
  let answer = 0;
  for (let i = 1; i < colors.length; i++) {
    if (colors[i] === colors[last]) {
      if (neededTime[i] > neededTime[last]) {
        answer += neededTime[last];
        last = i;
      } else {
        answer += neededTime[i];
      }
    } else {
      last = i;
    }
  }
  return answer;
}
