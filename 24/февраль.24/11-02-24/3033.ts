function modifiedMatrix(matrix: number[][]): number[][] {
  for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix[i].length; j++) {
      if (matrix[i][j] === -1) {
        let buffer = -1;
        for (let k = 0; k < matrix.length; k++) {
          buffer = Math.max(buffer, matrix[k][j]);
        }
        matrix[i][j] = buffer;
      }
    }
  }
  return matrix;
}
