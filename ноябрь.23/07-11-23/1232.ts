function checkStraightLine(coordinates: number[][]): boolean {
  coordinates = coordinates.sort((a, b) => {
    if (a[0] - b[0] > 0) {
      return 1;
    }
    if (a[0] - b[0] < 0) {
      return -1;
    }
    if (a[1] - b[1] > 0) {
      return 1;
    }
    if (a[1] - b[1] < 0) {
      return -1;
    }
    return 0;
  });
  let x = coordinates[1][0] - coordinates[0][0];
  let y = coordinates[1][1] - coordinates[0][1];

  for (let i = 2; i < coordinates.length; i++) {
    let xBuf = coordinates[i][0] - coordinates[i - 1][0];
    let yBuf = coordinates[i][1] - coordinates[i - 1][1];
    if (x !== 0 && xBuf !== 0 && y !== 0 && yBuf !== 0) {
      if (x !== xBuf || y !== yBuf) return false;
    }
  }
  return true;
}
