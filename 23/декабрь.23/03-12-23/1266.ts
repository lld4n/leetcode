function minTimeToVisitAllPoints(points: number[][]): number {
  let start: [number, number] = [points[0][0], points[0][1]];
  let answer = 0;
  for (let i = 1; i < points.length; i++) {
    let end: [number, number] = [points[i][0], points[i][1]];
    answer += getMin(start, end);
    start = [points[i][0], points[i][1]];
  }
  return answer;
}

function getMin(start: [number, number], end: [number, number]): number {
  let rast1 = Math.abs(start[0] - end[0]);
  let rast2 = Math.abs(start[1] - end[1]);
  if (rast2 === rast1) {
    return rast1;
  } else if (rast1 < rast2) {
    return rast2;
  } else {
    return rast1;
  }
}
