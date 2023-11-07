function isRobotBounded(instructions: string): boolean {
  const dirs = [
    [0, 1],
    [1, 0],
    [0, -1],
    [-1, 0],
  ];
  let head = 0;
  let x = 0;
  let y = 0;

  for (const instruction of instructions) {
    if (instruction === "G") {
      x = x + dirs[head][0];
      y = y + dirs[head][1];
    } else if (instruction === "L") {
      head = (4 + head - 1) % 4;
    } else {
      head = (4 + head + 1) % 4;
    }
  }
  const isAtOrigin = x === 0 && y === 0;
  const isHeadingNorth = head === 0;

  return isAtOrigin || !isHeadingNorth;
}
