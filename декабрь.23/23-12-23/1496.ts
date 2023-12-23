function isPathCrossing(path: string): boolean {
  let bufferX: number[] = [0];
  let bufferY: number[] = [0];
  let start: [number, number] = [0, 0];
  for (let i = 0; i < path.length; i++) {
    const elem = path[i];
    if (elem === "E") {
      start[0]++;
    } else if (elem === "W") {
      start[0]--;
    } else if (elem === "S") {
      start[1]--;
    } else {
      start[1]++;
    }
    for (let j = 0; j < bufferX.length; j++) {
      if (bufferX[j] === start[0] && bufferY[j] === start[1]) {
        return true;
      }
    }

    bufferX.push(start[0]);
    bufferY.push(start[1]);
  }
  return false;
}
