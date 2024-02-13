function checkValid(matrix: number[][]): boolean {
  const transposeMatrix = (matrix: number[][]) => {
    return matrix[0].map((_, colIndex) => matrix.map((row) => row[colIndex]));
  };

  for (const item of matrix) {
    const buffer = [...item].sort((a, b) => a - b);
    for (let i = 0; i < buffer.length; i++) {
      if (i + 1 !== buffer[i]) return false;
    }
  }

  const ne = transposeMatrix(matrix);
  for (const item of ne) {
    const buffer = [...item].sort((a, b) => a - b);
    for (let i = 0; i < buffer.length; i++) {
      if (i + 1 !== buffer[i]) return false;
    }
  }
  return true;
}
