function findRotation(mat: number[][], target: number[][]): boolean {
  function rotateMatrix(matrix: number[][]): number[][] {
    const n = matrix.length;
    const rotatedMatrix: number[][] = [];

    for (let i = 0; i < n; i++) {
      rotatedMatrix.push([]);
    }

    for (let i = 0; i < n; i++) {
      for (let j = 0; j < n; j++) {
        rotatedMatrix[j].unshift(matrix[i][j]);
      }
    }

    return rotatedMatrix;
  }

  function areMatricesEqual(matrix1: number[][], matrix2: number[][]): boolean {
    if (matrix1.length !== matrix2.length) {
      return false;
    }

    const n = matrix1.length;

    for (let i = 0; i < n; i++) {
      if (matrix1[i].length !== n || matrix2[i].length !== n) {
        return false;
      }

      for (let j = 0; j < n; j++) {
        if (matrix1[i][j] !== matrix2[i][j]) {
          return false;
        }
      }
    }

    return true;
  }
  const f1 = rotateMatrix(mat);
  const f2 = rotateMatrix(f1);
  const f3 = rotateMatrix(f2);
  return (
    areMatricesEqual(mat, target) ||
    areMatricesEqual(f1, target) ||
    areMatricesEqual(f2, target) ||
    areMatricesEqual(f3, target)
  );
}
