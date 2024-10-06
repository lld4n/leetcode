function maxWidthOfVerticalArea(points: [number, number][]): number {
  let list = points.map((el) => el[0]).sort((a, b) => a - b);
  let answer = -Infinity;
  for (let i = 0; i < list.length - 1; i++) {
    answer = Math.max(list[i + 1] - list[i], answer);
  }
  return answer;
}
