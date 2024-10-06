function luckyNumbers(matrix: number[][]): number[] {
  const c = (column: number, value: number): boolean => {
    const q: number[] = [];
    for (let i = 0; i < matrix.length; i++) {
      q.push(matrix[i][column]);
    }
    return value === Math.max(...q);
  };
  const ans: number[] = [];
  for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix[i].length; j++) {
      if (
        matrix[i][j] === Math.min(...matrix[i]) &&
        c(j, matrix[i][j])
      ) {
        ans.push(matrix[i][j]);
      }
    }
  }
  return ans;
}
