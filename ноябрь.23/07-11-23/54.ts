function spiralOrder(matrix: number[][]): number[] {
  let i = 0;
  let j = -1;
  let iMax = matrix.length - 1;
  let jMax = matrix[0].length - 1;
  let buffer = [
    [0, 1],
    [1, 0],
    [0, -1],
    [-1, 0],
  ];
  let index = 0;
  let massive = [];
  while (massive.length !== matrix.length * matrix[0].length) {
    i += buffer[index][0];
    j += buffer[index][1];
    massive.push(matrix[i][j]);
    if (i === iMax) {
      iMax--;
      index = (index + 1 + 4) % 4;
    } else if (j === jMax) {
      jMax--;
      index = (index + 1 + 4) % 4;
    }
  }
  return massive;
}
